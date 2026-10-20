export const HomePage = () => {
  const fullName = "Martinez Matias Jose";

  return (
    <>
      <header className="border-b border-border">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <a href="#inicio" className="font-semibold">
            {fullName}
          </a>
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <li>
              <a href="#inicio" className="hover:text-foreground">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="hover:text-foreground">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-foreground">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section
        id="inicio"
        className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24"
      >
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {fullName}
        </h1>
        <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border-2 border-dashed border-border bg-muted text-sm text-muted-foreground md:justify-self-end">
          <img
            src="https://ik.imagekit.io/f9mtj7lc7/profile/profile.png"
            alt="Imagen de perfil"
          />
        </div>
      </section>
    </>
  );
};
