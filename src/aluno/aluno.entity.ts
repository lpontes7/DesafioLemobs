import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('aluno')

export class AlunoEntity{

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column ('text') 
    nome : string;

    @Column('date') 
    data_nascimento : Date;

    @Column ('text') 
    cpf : string;
    
    @Column ('numeric') 
    nota : string;



}