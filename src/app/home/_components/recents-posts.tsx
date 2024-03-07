import { CardPost } from "./card-post";

export function RecentPosts() {
  return (
    <section className="mt-32">
      <h2 className="text-xl text-slate-800 font-semibold">Posts recentes</h2>

      <div className="w-full grid grid-cols-2 gap-8 mt-8 ">
        <CardPost />

        <div className="flex flex-col">
          <CardPost />
          <CardPost />
        </div>
      </div>
    </section>
  );
}
