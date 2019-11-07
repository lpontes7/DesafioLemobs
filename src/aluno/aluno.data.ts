import { ApiModelProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";



export class AlunoData{
 
    @ApiModelProperty()
    @IsNotEmpty({ message: 'nome vazio' })
    nome: string;
    
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Data Vazia' })
    datanascimento : string;
    
    @ApiModelProperty()
    @IsNotEmpty({ message: 'CPF vazio' })
    @IsNumber()
    cpf : number;
    
    @ApiModelProperty()
    @IsNotEmpty({ message: 'Nota Vazia' })
    @IsNumber()
    nota: number;

}
