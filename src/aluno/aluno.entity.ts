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

    @Column ('text') 
    cpf : string;
    
    @Column ('double precision') 
    nota : Double;

    //relacionamento um aluno pode ter 1 ou varios endereços 

    @OneToMany(type => EnderecoEntity, endereco => endereco.aluno) 
    endereco : AlunoEntity[];

    //Ajuda da documentação
    //@OneToMany(type => Photo, photo => photo.author) // note: we will create author property in the Photo class below
    //photos: Photo[];


}