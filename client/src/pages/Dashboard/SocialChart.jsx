import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SocialChart = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3006/dashboard/stats`)
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <p>Loading stats...</p>;

  const chartData = Object.entries(stats).map(([userId, stat]) => ({
    name: `User ${userId}`,
    todayLikes: stat.today.likes,
    todayComments: stat.today.comments,
    weeklyLikes: stat.weekly.likes,
    weeklyComments: stat.weekly.comments,
    monthlyLikes: stat.monthly.likes,
    monthlyComments: stat.monthly.comments,
  }));

  return (
    <div className="p-8 m-10 border-2 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-3">Stats for user</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} barCategoryGap="10%">
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="todayLikes" fill="#4F46E5" name="Today Likes" />
          <Bar dataKey="todayComments" fill="#EC4899" name="Today Comments" />
          <Bar dataKey="weeklyLikes" fill="#10B981" name="Weekly Likes" />
          <Bar dataKey="weeklyComments" fill="#F59E0B" name="Weekly Comments" />
          <Bar dataKey="monthlyLikes" fill="#3B82F6" name="Monthly Likes" />
          <Bar
            dataKey="monthlyComments"
            fill="#EF4444"
            name="Monthly Comments"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SocialChart;
