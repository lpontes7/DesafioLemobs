import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoEntity } from './endereco.entity';
import { EnderecoData } from './endereco.data';
import { AlunoEntity } from '../aluno/aluno.entity';


@Injectable()
export class EnderecoService {
    constructor(
        @InjectRepository(EnderecoEntity) 
        private enderecoRepository: Repository <EnderecoEntity>,
        @InjectRepository(AlunoEntity) 
        private alunoRepository: Repository <AlunoEntity>


    ) {}

    async CreateEndereco(idAluno : string, data : EnderecoData){
        
        const aluno = await this.alunoRepository.findOne({where: {id : idAluno}})
        const endereco = await this.enderecoRepository.create({...data, aluno: aluno});
        
        await this.enderecoRepository.save(endereco);
        return {...endereco, aluno: aluno.enderecos};
    }

    async ShowAllEndereco(){
        return await this.enderecoRepository.find({relations:['aluno']});    
    }

    async ShowAllEndBairro(bairro: string){
        return await this.enderecoRepository.find({where :{bairro :bairro}})
    }
    
    async deleteEndereco(id: string){
        await this.enderecoRepository.delete({id});
        return {deleted : true};
    } 
       
}
