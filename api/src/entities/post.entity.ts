import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false, length: 50 })
  name: string;

  @Column({ nullable: false, length: 255 })
  description: string;

}
