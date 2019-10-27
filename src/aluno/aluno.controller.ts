import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { get } from 'http';
import { AlunoService } from './aluno.service';
import { AlunoData } from './aluno.data';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService : AlunoService) {}

    //cadastrar aluno
    @Post()
    createAluno(@Body() data: AlunoData){
        return this.alunoService.createAluno(data)
    }

    //atualizar dados dos aluno
    @Put(':id')
    updateAluno(@Param('id') id: string, @Body() data : Partial<AlunoData>){
        return this.alunoService.updateAluno(id, data)
    }
    
    //mostrar dados especifico do aluno
    @Get(':id')
    showOneAluno(@Param('id') id: string){
        return this.alunoService.showOneAluno(id);
    }
    
    //mostrar dados de todos alunos
    @Get()
    showAllAlunos(){
        return this.alunoService.showAllAlunos();
    }

    //Apagar aluno 
    //Acabei fazendo o delete porque tive que apagar todos os alunos que ja tinha sido cadastrados 
    //tinha usado nota como numeric, mas só aceitava numeros inteiros
    //assim fiz o delete apaguei todos os alunos e mudei o tipo do atributo da tabela.

    @Delete(':id')
    deleteAluno(@Param('id') id: string){
        return this.alunoService.deleteAluno(id);
    }
 




    




}
