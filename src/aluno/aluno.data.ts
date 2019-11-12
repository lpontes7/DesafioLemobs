import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { IsCPF } from "../Util/ validadorCPF";



export class AlunoData{
 
    @ApiModelProperty()
    @IsNotEmpty({ message: 'nome vazio' })
    nome: string;
    
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Data Vazia' })
    datanascimento : string;
    
    @ApiModelProperty()
    @IsNotEmpty({ message: 'CPF vazio' })
    @IsCPF({message: 'CPF invalido' })
    cpf : string;
    
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Nota Vazia' })
    @IsNumber()
    nota: number;

}
