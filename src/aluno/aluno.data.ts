import { Double } from "typeorm";

export interface AlunoData{
 nome: string;
 datanascimento : Date;
 cpf : string;
 nota: Double;

}