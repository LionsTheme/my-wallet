import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteAccountDTO {
  @IsString()
  @IsNotEmpty()
  id: string;
}
