import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoData } from './endereco.data';

@Controller('endereco')
export class EnderecoController {
    constructor (private enderecoService : EnderecoService){}

    @Post()
    CreateEndereco(@Body() data: EnderecoData){
        return this.enderecoService.CreateEndereco(data);
    }

    @Get()
    ShowAllEndereco(){
        return this.enderecoService.ShowAllEndereco();
    }

    @Get(':bairro')
    ShowAllEndBairro(@Param('bairro') bairro: string){
        return this.enderecoService.ShowAllEndBairro(bairro);
    }

}
