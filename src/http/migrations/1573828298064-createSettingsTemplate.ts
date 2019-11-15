import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Setting } from "../entities/Setting";

export class createSettingsTemplate1573828298064 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const setting = new Setting();
    setting.key = "ui_menu_styles";
    const jsonValue =
      '{"menuColor": "#256ba7", "systemName": "SISTEMA MÉDICO", "colorTexto": "#FFFFFF", "startFooter": "SISTEMA MÉDICO FOOTER", "systemMotto": "SISTEMA MÉDICO LEMA", "menuColorActive": "#004179"}';
    setting.jsonValue = jsonValue;
    setting.description = "Configuración de estilos de la plantilla";
    const configRepository = getRepository(Setting);
    await configRepository.save(setting);
    await queryRunner.query(
      "ALTER TABLE `settings` MODIFY COLUMN `json_value` json"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
