interface NameToType {
  DATABASE_URL: string;
}

export function getEnv<Env extends keyof NameToType>(
  name: Env
): NameToType[Env];

export function getEnv(name: keyof NameToType) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return value;
}
