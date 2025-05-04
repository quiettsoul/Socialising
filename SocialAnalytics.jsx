import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const engagementData = [
  { name: "Пн", лайки: 120, комментарии: 40, репосты: 20 },
  { name: "Вт", лайки: 200, комментарии: 70, репосты: 35 },
  { name: "Ср", лайки: 150, комментарии: 55, репосты: 30 },
  { name: "Чт", лайки: 300, комментарии: 90, репосты: 60 },
  { name: "Пт", лайки: 250, комментарии: 80, репосты: 50 },
  { name: "Сб", лайки: 400, комментарии: 120, репосты: 90 },
  { name: "Вс", лайки: 280, комментарии: 100, репосты: 70 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SocialAnalytics() {
  const [selectedTab, setSelectedTab] = useState("vk");

  return (
    <div className="min-h-screen bg-[#001f3f] text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">SocialTools — Аналитика соцсетей</h1>

      <Tabs defaultValue="vk" onValueChange={setSelectedTab} className="mb-6">
        <TabsList className="bg-[#003366]">
          <TabsTrigger value="vk">VK</TabsTrigger>
          <TabsTrigger value="tg">Telegram</TabsTrigger>
          <TabsTrigger value="insta">Instagram</TabsTrigger>
          <TabsTrigger value="fb">Facebook</TabsTrigger>
        </TabsList>

        <TabsContent value="vk">
          <Card className="bg-[#002b5c]">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-4">Аналитика VK</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="лайки" stroke="#8884d8" />
                  <Line type="monotone" dataKey="комментарии" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="репосты" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tg">
          <Card className="bg-[#002b5c]">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-4">Аналитика Telegram</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="лайки" fill="#8884d8" />
                  <Bar dataKey="комментарии" fill="#82ca9d" />
                  <Bar dataKey="репосты" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insta">
          <Card className="bg-[#002b5c]">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-4">Аналитика Instagram</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={[
                      { name: "Лайки", value: 400 },
                      { name: "Комментарии", value: 200 },
                      { name: "Репосты", value: 100 },
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {[
                      { name: "Лайки", value: 400 },
                      { name: "Комментарии", value: 200 },
                      { name: "Репосты", value: 100 },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fb">
          <Card className="bg-[#002b5c]">
            <CardContent className="p-6">
              <h2 className="text-2xl mb-4">Аналитика Facebook</h2>
              <p>Здесь можно будет добавить графики Facebook (в разработке).</p>
              <Button className="mt-4">Связаться с разработчиком</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <footer className="mt-12 text-center text-sm text-gray-300">
        <p>Разработчик: Anuarbek Zhanasyl</p>
        <p>Телефон: <a href="tel:+77072389006" className="underline">+7 707 238 9006</a></p>
        <p>Instagram: <a href="https://www.instagram.com/quiettsoul?igsh=dDNvdXZqNzA3ZzBo&utm_source=qr" target="_blank" className="underline">@quiettsoul</a></p>
      </footer>
    </div>
  );
}