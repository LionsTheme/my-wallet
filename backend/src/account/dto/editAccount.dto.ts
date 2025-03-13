import { IsString, IsNotEmpty } from 'class-validator';
import { AddAccountDto } from './addAccount.dto';

export class EditAccountDto extends AddAccountDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
