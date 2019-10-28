import { Entity, PrimaryGeneratedColumn, Column, Double, OneToMany } from 'typeorm';
import { EnderecoEntity } from 'src/endereco/endereco.entity';

@Entity('aluno')

export class AlunoEntity{

    @PrimaryGeneratedColumn('uuid') 
    id: string;

    @Column ('text') 
    nome : string;

    @Column('date') 
    data_nascimento : Date;

    //Definindo tamanho CPF 
    //Apesar de colocar CPF como number ele permite a inserção de letras
    //infelizmente não consegui resolver a validação dessa forma
    //porem o tamanho está estabelecido e funcionando
    @Column ({ type: 'varchar', length: 11}) 
    cpf : number;
    
    @Column ('double precision') 
    nota : Double;
 
    //relacionamento um aluno pode ter 1 ou varios endereços 

    //@OneToMany(type => EnderecoEntity, endereco => endereco.aluno) 
    //enderecos : EnderecoEntity[];

    //Exemplo documentação 
    //@OneToMany(type => Photo, photo => photo.author) // note: we will create author property in the Photo class below
    //photos: Photo[];


}