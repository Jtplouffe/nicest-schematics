import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { BaseConfig } from "../../common/base-config";

export interface Schema {
    name: string;
    path: string;
    addToModule: boolean;
}

export interface TemplateConfig extends Omit<Schema, "path" | "addToModule"> {
    prefix?: string;
}

export class Config extends BaseConfig implements Schema {
    public get name(): string {
        return this.schema.name;
    }

    public get path(): string {
        return this.schema.path ?? this.projectSourcePath ?? "";
    }

    public get addToModule(): boolean {
        return this.schema.addToModule;
    }

    public templateOptions(): TemplateConfig {
        return {
            name: this.schema.name,
            prefix: this.project?.prefix
        };
    }

    constructor(private readonly schema: Schema, public tree: Tree) {
        super(tree);
    }
}
