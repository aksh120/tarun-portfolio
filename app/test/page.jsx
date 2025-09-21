"use client";
import React, { useState } from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from 'recharts';
import {
  TrendingUp,
  DollarSign,
  Star,
  Activity,
  Zap,
  Target,
  Shield,
} from 'lucide-react';

function MetaFinancialDashboard() {
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const metaData = [
    {
      year: 2021,
      revenue: 117929,
      cogs: 24600,
      operatingIncome: 46153,
      netIncome: 39370,
      totalAssets: 165987,
      totalEquity: 124879,
      currentAssets: 65840,
      currentLiabilities: 21500,
      cashFlowOperations: 57300,
      debt: 14900,
      grossProfit: 93329,
      grossMargin: 79.1,
      operatingMargin: 39.1,
      netMargin: 33.4,
      roa: 23.7,
      roe: 31.5,
      assetTurnover: 0.71,
      equityMultiplier: 1.329,
      currentRatio: 3.062,
      debtToEquity: 0.119,
      operatingCfCoverage: 3.846,
    },
    {
      year: 2022,
      revenue: 116609,
      cogs: 26000,
      operatingIncome: 28209,
      netIncome: 23200,
      totalAssets: 185734,
      totalEquity: 128290,
      currentAssets: 75740,
      currentLiabilities: 25000,
      cashFlowOperations: 50800,
      debt: 18600,
      grossProfit: 90609,
      grossMargin: 77.7,
      operatingMargin: 24.2,
      netMargin: 19.9,
      roa: 12.5,
      roe: 18.1,
      assetTurnover: 0.628,
      equityMultiplier: 1.448,
      currentRatio: 3.03,
      debtToEquity: 0.145,
      operatingCfCoverage: 2.731,
    },
    {
      year: 2023,
      revenue: 134902,
      cogs: 29000,
      operatingIncome: 46500,
      netIncome: 39600,
      totalAssets: 210000,
      totalEquity: 145000,
      currentAssets: 90000,
      currentLiabilities: 28000,
      cashFlowOperations: 63500,
      debt: 22000,
      grossProfit: 105902,
      grossMargin: 78.5,
      operatingMargin: 34.5,
      netMargin: 29.4,
      roa: 18.9,
      roe: 27.3,
      assetTurnover: 0.642,
      equityMultiplier: 1.448,
      currentRatio: 3.214,
      debtToEquity: 0.152,
      operatingCfCoverage: 2.886,
    },
  ];

  const keyMetrics = [
    {
      title: 'Operating Margin',
      value: '34.5%',
      change: '+10.3%',
      icon: TrendingUp,
      color: 'from-emerald-400 to-cyan-400',
      textColor: 'text-emerald-600',
      description: 'Strong operational efficiency',
    },
    {
      title: 'Current Ratio',
      value: '3.21',
      change: '+0.18',
      icon: Shield,
      color: 'from-blue-400 to-indigo-500',
      textColor: 'text-blue-600',
      description: 'Excellent liquidity position',
    },
    {
      title: 'Revenue Growth',
      value: '+15.7%',
      change: 'YoY',
      icon: Zap,
      color: 'from-purple-400 to-pink-400',
      textColor: 'text-purple-600',
      description: 'Accelerating growth trajectory',
    },
    {
      title: 'ROE',
      value: '27.3%',
      change: '+9.2%',
      icon: Target,
      color: 'from-orange-400 to-red-400',
      textColor: 'text-orange-600',
      description: 'Strong shareholder returns',
    },
  ];

  const profitabilityData = [
    { name: 'Gross Profit', value: 78.5, color: '#06D6A0' },
    { name: 'Operating Margin', value: 34.5, color: '#118AB2' },
    { name: 'Net Margin', value: 29.4, color: '#073B4C' },
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value * 1000000);
  };

  const MetricCard = ({ metric, index }) => {
    const Icon = metric.icon;
    return (
      <div
        className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${metric.color} transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer`}
        onMouseEnter={() => setHoveredMetric(index)}
        onMouseLeave={() => setHoveredMetric(null)}
        style={{
          boxShadow:
            hoveredMetric === index
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              : '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Icon className="h-8 w-8 text-white opacity-90" />
            <span className="text-white text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
              {metric.change}
            </span>
          </div>
          <p className="text-white text-sm font-medium opacity-90 mb-1">{metric.title}</p>
          <p className="text-white text-3xl font-bold mb-2">{metric.value}</p>
          <p className="text-white text-xs opacity-75">{metric.description}</p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16" />
      </div>
    );
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-xl shadow-2xl border border-gray-100">
          <p className="font-semibold text-gray-800 mb-2">{`Year: ${label}`}</p>
          {payload.map((entry, idx) => (
            <p key={idx} style={{ color: entry.color }} className="text-sm">
              {`${entry.name}: ${
                entry.name.includes('Margin') ||
                entry.name.includes('ROE') ||
                entry.name.includes('ROA')
                  ? `${entry.value}%`
                  : formatCurrency(entry.value)
              }`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const gradientDefs = (
    <defs>
      <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#06D6A0" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#06D6A0" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="marginGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1} />
      </linearGradient>
      <linearGradient id="cashGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 mb-8">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">Meta Financial Analysis</h1>
                <p className="text-purple-100 text-lg">AI/AR Division Performance • 2021-2023</p>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <span className="text-white text-sm font-medium">Financial Excellence</span>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-full px-4 py-2">
                    <span className="text-white text-sm font-medium">Growth Trajectory</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <DollarSign className="h-16 w-16 text-white opacity-80 mb-2 ml-auto" />
                <p className="text-purple-100 text-sm">Last Updated</p>
                <p className="text-white font-semibold">September 2025</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full transform translate-x-48 -translate-y-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full transform -translate-x-32 translate-y-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Activity className="mr-3 h-6 w-6" />
              Revenue & Profitability Evolution
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={metaData}>
                {gradientDefs}
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area type="monotone" dataKey="revenue" fill="url(#revenueGradient)" stroke="#8B5CF6" strokeWidth={3} name="Revenue (M)" />
                <Line type="monotone" dataKey="operatingIncome" stroke="#06D6A0" strokeWidth={4} dot={{ fill: '#06D6A0', strokeWidth: 2, r: 6 }} name="Operating Income (M)" />
                <Line type="monotone" dataKey="netIncome" stroke="#F59E0B" strokeWidth={4} dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }} name="Net Income (M)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="mr-3 h-6 w-6" />
              Profitability Margins
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={metaData}>
                {gradientDefs}
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area type="monotone" dataKey="grossMargin" stackId="1" stroke="#06D6A0" fill="url(#profitGradient)" name="Gross Margin %" />
                <Area type="monotone" dataKey="operatingMargin" stackId="2" stroke="#3B82F6" fill="url(#cashGradient)" name="Operating Margin %" />
                <Area type="monotone" dataKey="netMargin" stackId="3" stroke="#F59E0B" fill="url(#marginGradient)" name="Net Margin %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Return Ratios</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={metaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="roe" fill="#8B5CF6" name="ROE %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="roa" fill="#06D6A0" name="ROA %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Liquidity Health</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={metaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="currentRatio" stroke="#F59E0B" strokeWidth={4} dot={{ fill: '#F59E0B', strokeWidth: 2, r: 8 }} name="Current Ratio" />
                <Line type="monotone" dataKey="operatingCfCoverage" stroke="#3B82F6" strokeWidth={4} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 8 }} name="CF Coverage" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">2023 Profitability</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={profitabilityData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name}: ${value}%`}>
                  {profitabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                <Star className="mr-3 h-8 w-8" />
                Executive Summary
              </h3>
              <p className="text-emerald-100 text-lg leading-relaxed">
                Meta's financial performance showcases <strong className="text-white">exceptional growth trajectory</strong> with a robust 34.5% operating margin and strong 15.7% revenue growth. The company maintains <strong className="text-white">excellent liquidity</strong> (Current Ratio: 3.21) while delivering outstanding shareholder returns (ROE: 27.3%). The AI/AR division demonstrates <strong className="text-white">scalable profitability</strong> and positions Meta for sustained leadership in next-generation technology platforms.
              </p>
            </div>
            <div className="ml-8 text-right">
              <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                <p className="text-white text-sm font-medium">Overall Score</p>
                <p className="text-white text-4xl font-bold">A+</p>
                <p className="text-emerald-100 text-xs">Financial Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestPage() {
  return <MetaFinancialDashboard />;
}
