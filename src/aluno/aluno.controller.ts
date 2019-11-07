import { Controller, Get, Post, Put, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoData } from './aluno.data';


@Controller('aluno')
export class AlunoController {
    constructor(private alunoService : AlunoService) {}

    //cadastrar aluno
    @Post()
    createAluno(@Body() data: AlunoData, cpf: AlunoData["cpf"]){
        return this.alunoService.createAluno(data, cpf)
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
    
    //Alunos A cima da media 
    //coloquei a url assim pq estava dando erro com o a url de pegar um unico aluno 
    @Get('aluno/media')
    showAlunoMedia(){
        return this.alunoService.showAlunoMedia();
    }

    //Lista de alunos e acordo com criterio e nota 
    @Get(':nota/criterio/:criterio')
    showAlunoCriterio(@Param('nota', new ParseIntPipe()) nota: number, @Param('criterio') criterio : string ){
        return this.alunoService.showAlunoCriterio(nota, criterio);
    }    

    //Listar endereços de alunos 
    @Get(':id/endereco')
    showAllEndereco(@Param('id') id: string ){
        return this.alunoService.showAllEndereco(id);
    }

    //Apagar aluno 
    //Acabei fazendo o delete porque tive que apagar todos os alunos que ja tinha sido cadastrados 
    @Delete(':id')
    deleteAluno(@Param('id') id: string){
        return this.alunoService.deleteAluno(id);
    }

}
