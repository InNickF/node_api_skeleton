import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import {User, userRole} from "../entities/User";
import {Setting} from "../entities/Setting";

export class CreateAdminUser1571849091255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const user = new User();
    user.username = "admin1";
    user.password = "admin";
    await user.hashPassword();
    user.role = userRole.ADMIN;
    const userRepository = getRepository(User);
    await userRepository.save(user);

    const setting = new Setting();
    setting.key = "ui_menu_styles";
    const jsonValue= '{"menuColor": "#256ba7", "systemName": "SISTEMA MÉDICO", "colorTexto": "#FFFFFF", "startFooter": "SISTEMA MÉDICO FOOTER", "systemMotto": "SISTEMA MÉDICO LEMA", "menuColorActive": "#004179"}';
    setting.json_value = jsonValue;
    setting.description = "Configuración de estilos de la plantilla";
    const configRepository = getRepository(Setting);
    await configRepository.save(setting);

    await queryRunner.query('ALTER TABLE `settings` MODIFY COLUMN `json_value` json');
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // TODO
  }
}
