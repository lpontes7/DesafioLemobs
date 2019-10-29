import { Injectable } from '@nestjs/common';
import { Repository, Double, createQueryBuilder, getConnection, getRepository, } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AlunoEntity } from './aluno.entity';
import { AlunoData } from './aluno.data';
import { EnderecoEntity } from 'src/endereco/endereco.entity';


@Injectable()
export class AlunoService {
    constructor (@InjectRepository(AlunoEntity) private alunoRepository: Repository<AlunoEntity>,
                 @InjectRepository(EnderecoEntity) private enderecoRepository: Repository<EnderecoEntity>   
    ) {} 

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
        
        return {alunMaiorMedia, media}
    }

     //programar a função 
    async showAlunoCriterio(nota: Double, criterio : string){
        

        if (criterio == ">"){
            const ListaAlunos = await getRepository(AlunoEntity)
            .createQueryBuilder("user")
            .select("user")
            .where("user.nota > :nota", { nota: nota })
            .getRawMany();
        
            return {ListaAlunos};
        }
        else if (criterio == "<") {
            const ListaAlunos = await getRepository(AlunoEntity)
            .createQueryBuilder("user")
            .select("user")
            .where("user.nota < :nota", { nota: nota })
            .getRawMany();
        
            return {ListaAlunos};
        } 
        else {
                
            return {criterio : false}
        }

    }

    //tenho certeza que não está correto, 
    //primeiro que não está usando id para pegar o aluno apenas usando o relacionamento
    //mas queria vê o que retornaria dessa chamada que fiz, se fosse um erro o que poderia ser etc... 
    //mas como não está rodando devido ao erro de modulo não sei o que está retornando ao certo 
    //pos esse relation ainda é desconhecido para mim.
    async showAllEndereco(id:string){
        return await this.enderecoRepository.find({relations: ['aluno']});
    }


    async deleteAluno(id: string){
        await this.alunoRepository.delete({id});
        return {deleted : true};
    }

}
