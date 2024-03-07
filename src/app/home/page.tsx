import { Header } from "./_components/header";
import { RecentPosts } from "./_components/recents-posts";

export default function Page() {
  return (
    <div className="max-w-[1280px] mx-auto p-[80px]">
      <Header />
      <RecentPosts />
    </div>
  );
}
