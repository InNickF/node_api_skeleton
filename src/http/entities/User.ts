import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import bcrypt from "bcryptjs";
import IUser from "../interfaces/IUser";

export enum userRole {
  ADMIN = "ADMIN",
  USER = "USER",
  DEVELOPER = "DEVELOPER"
}

@Entity()
@Unique(["username"])
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  username: string;

  @Column({ type: "varchar", length: 255 })
  password: string;

  @Column({ type: "enum", enum: userRole })
  role: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  constructor(params?: User) {
    super();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        this[key] = params[key];
      }
    }
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return await bcrypt.compare(unencryptedPassword, this.password);
  }
}
