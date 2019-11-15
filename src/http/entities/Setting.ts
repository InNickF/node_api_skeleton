import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity("settings")
export class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50 })
    key: string;

    @Column({ type: 'text' })
    json_value: string;

    @Column({ type: "text" })
    description: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

}
