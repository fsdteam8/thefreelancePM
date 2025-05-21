import { BarChart3, FileText, ShoppingBag } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

async function getCurrentMonthEarnings() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-based index

  // Start of the current month (in UTC)
  const startOfMonth = Math.floor(new Date(year, month, 1).getTime() / 1000);

  // End of the current month (in UTC)
  const endOfMonth = Math.floor(
    new Date(year, month + 1, 0, 23, 59, 59).getTime() / 1000,
  );

  try {
    const balanceTransactions = await stripe.balanceTransactions.list({
      created: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
      limit: 100, // Adjust based on expected volume
    });

    const totalNetEarnings = balanceTransactions.data.reduce((sum, tx) => {
      return sum + tx.net; // Net is in cents (or smallest currency unit)
    }, 0);

    console.log(`Total net earnings this month: ${totalNetEarnings / 100} USD`);

    return totalNetEarnings / 100; // Convert to dollars
  } catch (err) {
    console.error("Error fetching balance transactions:", err);
  }
}

const Stats = async () => {
  // const activeUsers = await prisma.user.count({
  //   where: {
  //     isActive: true,
  //   },
  // });

  const totalJobPosts = await prisma.job.count();
  const totalCourses = await prisma.course.count();

  const monthlyRevenue = await getCurrentMonthEarnings();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* <Card>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Active Users
            </p>
            <h3 className="mt-2 text-3xl font-bold text-primary">
              {activeUsers}
            </h3>
          </div>
          <div className="rounded-full bg-blue-50 p-3">
            <Users className="h-6 w-6 text-primary" />
          </div>
        </CardContent>
      </Card> */}
      <Card>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Monthly Revenue
            </p>
            <h3 className="mt-2 text-3xl font-bold text-primary">
              ${monthlyRevenue ?? 0}
            </h3>
          </div>
          <div className="rounded-full bg-blue-50 p-3">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Job Posts
            </p>
            <h3 className="mt-2 text-3xl font-bold text-primary">
              {totalJobPosts}
            </h3>
          </div>
          <div className="rounded-full bg-blue-50 p-3">
            <ShoppingBag className="h-6 w-6 text-primary" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Courses</p>
            <h3 className="mt-2 text-3xl font-bold text-primary">
              {totalCourses}{" "}
            </h3>
          </div>
          <div className="rounded-full bg-blue-50 p-3">
            <FileText className="h-6 w-6 text-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Stats;
