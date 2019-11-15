import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User, userRole } from "../entities/User";

export class CreateDeveloperUser1573828161025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const user = new User();
    user.username = "developer";
    user.password = "developer";
    await user.hashPassword();
    user.role = userRole.DEVELOPER;
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
