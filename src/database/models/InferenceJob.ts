import {
  Model,
  DataTypes,
  UUIDV4,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey,
} from "sequelize";
import sequelize from "../../config/sequelize";
import { InferenceJobStatus } from "../../utils/enums";

/**
 * Interface InferenceJob defines the structure of an InferenceJob object in the database.
 */
export class InferenceJob extends Model<
  InferAttributes<InferenceJob>,
  InferCreationAttributes<InferenceJob>
> {
  declare id: CreationOptional<string>;
  declare dataset_id: ForeignKey<string>;
  declare user_id: ForeignKey<string>;
  declare video_id: ForeignKey<string>;
  declare status: InferenceJobStatus;
  declare params: object;
  declare carbon_footprint: number;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}

InferenceJob.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    dataset_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Datasets",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    video_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Videos",
        key: "id",
      },
    },
    status: {
      type: DataTypes.ENUM(...Object.values(InferenceJobStatus)),
      allowNull: false,
      defaultValue: InferenceJobStatus.PENDING,
    },
    params: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    carbon_footprint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "InferenceJob",
    tableName: "InferenceJobs",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

export default InferenceJob;
