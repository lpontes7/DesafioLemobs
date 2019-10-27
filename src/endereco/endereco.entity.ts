import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AlunoEntity } from 'src/aluno/aluno.entity';

@Entity('endereco')

export class EnderecoEntity{

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column ('text') 
    rua : string;

    @Column ('text') 
    numero : string;

    @Column ('text') 
    complemento : string;

    @Column ('text') 
    bairro : string;
    
    //relacionamento 1 endereço pode pertencer a 1 ou varios alunos 

    @ManyToOne(type => AlunoEntity , aluno => aluno.endereco)
    aluno : AlunoEntity ;

     //Ajuda da documentação 
    //@ManyToOne(type => Author, author => author.photos)
    //author: Author;

}