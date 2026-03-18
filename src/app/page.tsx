"use client";

import { useState } from "react";
import { BookOpen, Users, Cpu, FlaskConical, BarChart3, Plus, ExternalLink, Calendar, Tag, Star, Clock, Filter } from "lucide-react";

type Tab = "papers" | "compute" | "researchers" | "experiments";

interface Paper { id: string; title: string; authors: string[]; venue: string; year: number; status: "reading" | "reviewed" | "implementing" | "cited"; tags: string[]; notes: string; url: string; }
interface Researcher { id: string; name: string; role: string; expertise: string[]; papers: number; hIndex: number; avatar: string; }
interface Experiment { id: string; name: string; status: "running" | "completed" | "failed" | "queued"; model: string; dataset: string; metric: string; score: number; gpu: string; duration: string; }
interface ComputeNode { id: string; name: string; gpus: string; utilization: number; memory: number; maxMemory: number; jobs: number; status: "online" | "offline" | "maintenance"; }

const papers: Paper[] = [
  { id: "1", title: "Attention Is All You Need", authors: ["Vaswani et al."], venue: "NeurIPS", year: 2017, status: "cited", tags: ["transformer", "attention"], notes: "Foundation paper", url: "#" },
  { id: "2", title: "Scaling Laws for Neural Language Models", authors: ["Kaplan et al."], venue: "ArXiv", year: 2020, status: "reviewed", tags: ["scaling", "llm"], notes: "Key insights on compute-optimal training", url: "#" },
  { id: "3", title: "LoRA: Low-Rank Adaptation", authors: ["Hu et al."], venue: "ICLR", year: 2022, status: "implementing", tags: ["fine-tuning", "efficient"], notes: "Implementing for our project", url: "#" },
  { id: "4", title: "Mixture of Experts Meets Instruction Tuning", authors: ["Shen et al."], venue: "ArXiv", year: 2024, status: "reading", tags: ["moe", "instruction-tuning"], notes: "Promising approach", url: "#" },
  { id: "5", title: "FlashAttention-2", authors: ["Dao et al."], venue: "ICLR", year: 2024, status: "implementing", tags: ["attention", "efficiency"], notes: "Integrating into our codebase", url: "#" },
];

const researchers: Researcher[] = [
  { id: "1", name: "Dr. Sarah Chen", role: "Principal Researcher", expertise: ["NLP", "Transformers", "Scaling Laws"], papers: 45, hIndex: 32, avatar: "SC" },
  { id: "2", name: "Alex Rodriguez", role: "Research Engineer", expertise: ["Systems", "Distributed Training", "MLOps"], papers: 12, hIndex: 8, avatar: "AR" },
  { id: "3", name: "Dr. Min Park", role: "Senior Researcher", expertise: ["Computer Vision", "Multimodal", "RLHF"], papers: 38, hIndex: 25, avatar: "MP" },
  { id: "4", name: "Jordan Liu", role: "PhD Intern", expertise: ["Fine-tuning", "Efficient ML", "Quantization"], papers: 5, hIndex: 3, avatar: "JL" },
];

const experiments: Experiment[] = [
  { id: "1", name: "LLM-7B-v3 SFT", status: "running", model: "Custom-7B", dataset: "UltraChat-200K", metric: "MMLU", score: 62.4, gpu: "8x H100", duration: "12h 34m" },
  { id: "2", name: "MoE-16x2B DPO", status: "completed", model: "MoE-16x2B", dataset: "OpenHermes-2.5", metric: "MT-Bench", score: 8.12, gpu: "16x H100", duration: "48h 12m" },
  { id: "3", name: "ViT-Large CLIP", status: "failed", model: "ViT-L/14", dataset: "LAION-400M", metric: "ImageNet Top-1", score: 0, gpu: "4x A100", duration: "6h 45m" },
  { id: "4", name: "Whisper-v4 Train", status: "queued", model: "Whisper-Large", dataset: "CommonVoice-17", metric: "WER", score: 0, gpu: "8x H100", duration: "-" },
];

const computeNodes: ComputeNode[] = [
  { id: "1", name: "gpu-cluster-01", gpus: "8x NVIDIA H100 80GB", utilization: 87, memory: 540, maxMemory: 640, jobs: 3, status: "online" },
  { id: "2", name: "gpu-cluster-02", gpus: "8x NVIDIA H100 80GB", utilization: 92, memory: 580, maxMemory: 640, jobs: 4, status: "online" },
  { id: "3", name: "gpu-cluster-03", gpus: "4x NVIDIA A100 80GB", utilization: 45, memory: 180, maxMemory: 320, jobs: 1, status: "online" },
  { id: "4", name: "gpu-cluster-04", gpus: "8x NVIDIA A100 40GB", utilization: 0, memory: 0, maxMemory: 320, jobs: 0, status: "maintenance" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("papers");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const tabs: { key: Tab; icon: React.ComponentType<{ size?: number }>; label: string }[] = [
    { key: "papers", icon: BookOpen, label: "Paper Tracker" },
    { key: "compute", icon: Cpu, label: "Compute" },
    { key: "researchers", icon: Users, label: "Researchers" },
    { key: "experiments", icon: FlaskConical, label: "Experiments" },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-60 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-2"><FlaskConical size={20} className="text-brand-400" /><h1 className="text-lg font-bold">StealthLab</h1></div>
          <p className="text-xs text-gray-500 mt-1">Research Lab Manager</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${activeTab === tab.key ? "bg-brand-600/20 text-brand-400" : "text-gray-400 hover:bg-gray-800"}`}>
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-gray-800 rounded-lg p-2"><p className="text-lg font-bold text-brand-400">{papers.length}</p><p className="text-[10px] text-gray-500">Papers</p></div>
            <div className="bg-gray-800 rounded-lg p-2"><p className="text-lg font-bold text-blue-400">{experiments.filter((e) => e.status === "running").length}</p><p className="text-[10px] text-gray-500">Running</p></div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {activeTab === "papers" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Paper Tracker</h2>
              <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-lg text-sm font-medium"><Plus size={14} /> Add Paper</button>
            </div>
            <div className="flex gap-2 mb-4">
              {["all", "reading", "reviewed", "implementing", "cited"].map((s) => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1 rounded-full text-xs capitalize ${statusFilter === s ? "bg-brand-600 text-white" : "bg-gray-800 text-gray-400"}`}>{s}</button>
              ))}
            </div>
            <div className="space-y-3">
              {papers.filter((p) => statusFilter === "all" || p.status === statusFilter).map((paper) => (
                <div key={paper.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium">{paper.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{paper.authors.join(", ")} | {paper.venue} {paper.year}</p>
                      <p className="text-sm text-gray-400 mt-2">{paper.notes}</p>
                      <div className="flex gap-2 mt-2">
                        {paper.tags.map((tag) => <span key={tag} className="text-xs bg-brand-900/30 text-brand-400 px-2 py-0.5 rounded">{tag}</span>)}
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${paper.status === "implementing" ? "bg-yellow-900/30 text-yellow-400" : paper.status === "reading" ? "bg-blue-900/30 text-blue-400" : paper.status === "cited" ? "bg-green-900/30 text-green-400" : "bg-gray-800 text-gray-400"}`}>{paper.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "compute" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Compute Allocation</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5"><p className="text-xs text-gray-500">Total GPUs</p><p className="text-2xl font-bold text-brand-400">28</p></div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5"><p className="text-xs text-gray-500">Active Jobs</p><p className="text-2xl font-bold text-blue-400">{computeNodes.reduce((s, n) => s + n.jobs, 0)}</p></div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5"><p className="text-xs text-gray-500">Avg Utilization</p><p className="text-2xl font-bold text-yellow-400">{Math.round(computeNodes.filter((n) => n.status === "online").reduce((s, n) => s + n.utilization, 0) / computeNodes.filter((n) => n.status === "online").length)}%</p></div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-5"><p className="text-xs text-gray-500">Memory Used</p><p className="text-2xl font-bold text-purple-400">{computeNodes.reduce((s, n) => s + n.memory, 0)} GB</p></div>
            </div>
            <div className="space-y-4">
              {computeNodes.map((node) => (
                <div key={node.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div><h3 className="font-medium">{node.name}</h3><p className="text-sm text-gray-500">{node.gpus}</p></div>
                    <span className={`text-xs px-2 py-1 rounded-full ${node.status === "online" ? "bg-green-900/30 text-green-400" : node.status === "maintenance" ? "bg-yellow-900/30 text-yellow-400" : "bg-red-900/30 text-red-400"}`}>{node.status}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div><p className="text-xs text-gray-500 mb-1">GPU Utilization</p><div className="bg-gray-800 rounded-full h-2"><div className="bg-brand-500 rounded-full h-2" style={{ width: `${node.utilization}%` }} /></div><p className="text-xs text-right mt-1">{node.utilization}%</p></div>
                    <div><p className="text-xs text-gray-500 mb-1">Memory</p><div className="bg-gray-800 rounded-full h-2"><div className="bg-purple-500 rounded-full h-2" style={{ width: `${(node.memory / node.maxMemory) * 100}%` }} /></div><p className="text-xs text-right mt-1">{node.memory}/{node.maxMemory} GB</p></div>
                    <div><p className="text-xs text-gray-500 mb-1">Active Jobs</p><p className="text-sm font-medium">{node.jobs}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "researchers" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Research Team</h2>
            <div className="grid grid-cols-2 gap-4">
              {researchers.map((r) => (
                <div key={r.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-600/20 rounded-full flex items-center justify-center text-brand-400 font-bold">{r.avatar}</div>
                    <div><h3 className="font-medium">{r.name}</h3><p className="text-sm text-gray-500">{r.role}</p></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {r.expertise.map((e) => <span key={e} className="text-xs bg-gray-800 px-2 py-1 rounded">{e}</span>)}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-xs text-gray-500">Publications</p><p className="font-bold">{r.papers}</p></div>
                    <div><p className="text-xs text-gray-500">h-index</p><p className="font-bold">{r.hIndex}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "experiments" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Experiment Dashboard</h2>
              <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-lg text-sm font-medium"><Plus size={14} /> New Experiment</button>
            </div>
            <div className="space-y-4">
              {experiments.map((exp) => (
                <div key={exp.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div><h3 className="font-medium">{exp.name}</h3><p className="text-sm text-gray-500">{exp.model} | {exp.dataset}</p></div>
                    <span className={`text-xs px-2 py-1 rounded-full ${exp.status === "running" ? "bg-green-900/30 text-green-400 animate-pulse" : exp.status === "completed" ? "bg-blue-900/30 text-blue-400" : exp.status === "failed" ? "bg-red-900/30 text-red-400" : "bg-gray-800 text-gray-400"}`}>{exp.status}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div><p className="text-xs text-gray-500">Metric</p><p className="text-sm font-medium">{exp.metric}: {exp.score || "-"}</p></div>
                    <div><p className="text-xs text-gray-500">Hardware</p><p className="text-sm">{exp.gpu}</p></div>
                    <div><p className="text-xs text-gray-500">Duration</p><p className="text-sm">{exp.duration}</p></div>
                    <div><p className="text-xs text-gray-500">Status</p><p className="text-sm capitalize">{exp.status}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
