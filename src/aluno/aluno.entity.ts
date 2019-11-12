import { Entity, PrimaryGeneratedColumn, Column, Double, OneToMany } from 'typeorm';
import { EnderecoEntity } from '../endereco/endereco.entity';

@Entity('aluno')

export class AlunoEntity{

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column ('text') 
    nome : string;

    @Column('text') 
    datanascimento : string;

    @Column ({ type: 'varchar', length: 11, unique: true}) 
    cpf : string;
    
    @Column ('double precision') 
    nota : number;
 
    //relacionamento um aluno pode ter 1 ou varios endereços 

    @OneToMany(type => EnderecoEntity, endereco => endereco.aluno) 
    enderecos : EnderecoEntity[];

    //Exemplo documentação 
    //@OneToMany(type => Photo, photo => photo.author) // note: we will create author property in the Photo class below
    //photos: Photo[];


}