import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-semibold">Página no encontrada</h1>
        <Link to="/" className="underline">
          Volver al inicio
        </Link>
      </div>
    </>
  );
};
