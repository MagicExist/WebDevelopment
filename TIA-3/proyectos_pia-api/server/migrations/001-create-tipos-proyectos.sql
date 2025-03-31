CREATE TABLE tipo_proyecto(
	id SERIAL PRIMARY KEY,
	codigo VARCHAR(8) NOT NULL UNIQUE,
	descripcion TEXT NOT NULL,
	abreviatura VARCHAR(6) NOT NULL,
	fecha_registro DATE
);