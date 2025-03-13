import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteTransactionDto {
  @IsString()
  @IsNotEmpty()
  transactionId: string;
}
