import { Injectable } from '@nestjs/common';
import { Repository, Double, createQueryBuilder, getConnection, getRepository, } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlunoEntity } from './aluno.entity';
import { AlunoData } from './aluno.data';


@Injectable()
export class AlunoService {
    constructor (@InjectRepository(AlunoEntity) private alunoRepository: Repository<AlunoEntity>) {} 

    async createAluno(data: AlunoData, cpf : AlunoData["cpf"]){
        
        //Não permitir inserir cpf igual
        //Logica não está funcionando 
        //CPF está como unique não está adicionando igual
        //Porem logica para avisar que já exite não está correta

        const CpfExists = await this.alunoRepository.findOne({ where:{cpf}});
        
        if (!CpfExists) {
            const aluno = await this.alunoRepository.create(data);
            await this.alunoRepository.save(aluno);
            return aluno;
        } 
        else {
            return {Cpf : true};
        }
    }

    async updateAluno(id: string, data: Partial <AlunoData> ){
        await this.alunoRepository.update({id}, data);
        return await this.alunoRepository.findOne({id});
    }

    async showOneAluno(id: string){
        return await this.alunoRepository.findOne({where:{id}});
    }

    async showAllAlunos(){
        return await this.alunoRepository.find();
    }

    //programar a função 
    async showAlunoMedia(){

        //soma das medias 
        const sum = await getRepository(AlunoEntity)
            .createQueryBuilder("user")
            .select("SUM(user.nota)", "sum")
            .getRawOne();

        //quantidade de notas
        const count = await getRepository(AlunoEntity)
            .createQueryBuilder("user")
            .select("COUNT(user.nota)", "count")
            .getRawOne();
        
        let media = sum.sum / count.count

        const alunMaiorMedia = await getRepository(AlunoEntity)
            .createQueryBuilder("user")
            .select("user")
            .where("user.nota > :nota", { nota: media })
            .getRawMany();
        
        return {alunMaiorMedia}
    }

     //programar a função 
    async showAlunoCriterio(nota: Double, criterio : string){
        return await this.alunoRepository.find({});
    }

    async deleteAluno(id: string){
        await this.alunoRepository.delete({id});
        return {deleted : true};
    }

}
