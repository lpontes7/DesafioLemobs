import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EnderecoEntity } from './endereco.entity';
import { EnderecoData } from './endereco.data';


@Injectable()
export class EnderecoService {
    constructor(@InjectRepository(EnderecoEntity) private enderecoRepository: Repository <EnderecoEntity>) {}

    async CreateEndereco(data : EnderecoData){
        const endereco = await this.enderecoRepository.create(data);
        await this.enderecoRepository.save(endereco);
        return endereco;
    }

    async ShowAllEndereco(){
        return await this.enderecoRepository.find();    
    }

    async ShowAllEndBairro(bairro: string){
        return await this.enderecoRepository.find({where :{bairro :bairro}})
    }
    
    async deleteAluno(id: string){
        await this.enderecoRepository.delete({id});
        return {deleted : true};
    } 
       
}
