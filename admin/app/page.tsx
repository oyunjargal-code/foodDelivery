import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Category } from "@/lib/services/getgetcategories";
import { getCategories } from "@/src/lib/getCategories";
import { LayoutDashboard, Van } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  // const categoriesData = [
  //   { label: "All Dishes", count: 112 },
  //   { label: "Appetizers", count: 6 },
  //   { label: "Salads", count: 3 },
  //   { label: "Pizzas", count: 5 },
  //   { label: "Lunch favorites", count: 6 },
  //   { label: "Main dishes", count: 5 },
  //   { label: "Fish & Sea foods", count: 5 },
  //   { label: "Brunch", count: 5 },
  //   { label: "Side dish ", count: 5 },
  //   { label: "Desserts", count: 5 },
  //   { label: "Beverages", count: 5 },
  // ];

  const categories = await getCategories();

  return (
    <div className="flex gap-4">
      <div>
        <h1>Dishes category</h1>
        <input type="text" className="border border-gray-300" />
        <Link href="/dashboard/foods">
          <button>Login</button>
        </Link>
      </div>

      {/* {[
        {
          id: 1,
          name: "bold",
          image: "https://picsum.photos/100/100",
        },
        {
          id: 2,
          name: "bat",
          image: "https://picsum.photos/100/100",
        },
      ].map((profile) => {
        return (
          <Profile key={profile.id} name={profile.name} image={profile.image} />
        );
      })} */}
    </div>
  );
}

// type ProfileProps = {
//   image: string;
//   name: string;
// };

// const Profile = (props: ProfileProps) => {
//   const { image, name } = props;

//   return (
//     <div>
//       <img src={image} alt="person" />
//       <p>{name}</p>
//     </div>
//   );
// };

// type FoodCategoryProps = {
//   category: Category;
// };

// const FoodCategory = (props: FoodCategoryProps) => {
//   const { category } = props;

//   return <div>{category.name}</div>;
// };

// const sum = (a: number, b: number) => {
//   return a + b;
// };

// const result = sum(2, 4);
