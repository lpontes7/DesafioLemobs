import { Controller, Get, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
    constructor(private alunoService : AlunoService) {}

    //cadastrar aluno
    @Post()
    createAluno(){}

    //atualizar dados dos aluno
    @Put(':id')
    updateAluno(){}
    
    //mostrar dados especifico do aluno
    @Get(':id')
    showOneAluno(){}
    
    //mostrar dados de todos alunos
    @Get()
    showAllAlunos(){}





    




}
