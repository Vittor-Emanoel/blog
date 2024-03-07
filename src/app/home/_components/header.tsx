export function Header() {
  return (
    <header className="max-w-full text-center flex flex-col items-center ">
      <small className="font-semibold text-primary text-lg">Issues Blog</small>
      <h1 className="text-slate-800 font-bold text-4xl mt-3">
        Crie seus posts e interaja de forma anônima
      </h1>
      <p className="text-xl font-normal mt-4 text-zinc-500">
        As vezes a melhor forma de expressar algo é escrevendo. ✍🏾
      </p>

      <form className="flex flex-col md:flex-row gap-4 mt-8 max-w-full">
        <input
          type="text"
          className="w-full border-zinc-400 border py-3 px-4 rounded-lg outline-none placeholder:text-sm placeholder:text-zinc-400"
          placeholder="Digite seu e-mail"
        />

        <button className="bg-primary text-white py-3 px-5 rounded-lg">
          Cadastrar
        </button>
      </form>
      <small className="mt-2 text-zinc-500">
        Você receberá um link para com o acesso ao seu blog.
      </small>
    </header>
  );
}
