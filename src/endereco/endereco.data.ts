import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { ParseUUIDPipe } from '@nestjs/common';


export class EnderecoData{
 
    @ApiModelProperty()
    @IsNotEmpty({ message: "Rua Vazio" })
    rua: string;
    
    @ApiModelProperty()
    numero : string;
    
    @ApiModelProperty()
    complemento: string;
    
    @ApiModelProperty()
    bairro : string;

    @ApiModelProperty()
    @IsNotEmpty({ message: "Id Aluno vazio" })
    idAluno : string;
    

}

