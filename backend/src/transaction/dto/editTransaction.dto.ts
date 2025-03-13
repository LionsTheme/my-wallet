import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTransactionDto } from './createTransaction';

export class EditTransactionDto extends CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
