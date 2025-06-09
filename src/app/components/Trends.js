"use client";
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  TrendingUp, Eye, Users, Clock, Brain, Play, Hash, Star, Globe, 
  BarChart3, Flame, Monitor, Youtube, Instagram, Twitter, 
  Music, Zap, ShoppingBag, Smile, Move, Crown, Award, Activity,
  Heart, MessageCircle, Share2, Sparkles, ChevronRight, Filter,
  Gamepad2, Briefcase, Camera, Video, MapPin, MessageSquare
} from 'lucide-react';

// ===== DONNÉES DES RÉSEAUX SOCIAUX (7 plateformes) =====
const SOCIAL_NETWORKS = [
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: Monitor,
    color: '#fe2c55',
    gradient: 'linear-gradient(135deg, #fe2c55, #ff6b9d)',
    users: '1.1B',
    growth: '+27%',
    engagement: '5.8%',
    avgWatchTime: '52m',
    topCountry: '🇺🇸 USA',
    trends: [
      { rank: 1, type: 'dance', title: 'Danse des Mains Magiques', views: '145M', icon: Move, hot: true, growth: '+340%', creator: '@danceking23', hashtags: ['#magichands', '#viral'], duration: '15s', country: '🇫🇷', ageGroup: '16-24' },
      { rank: 2, type: 'music', title: 'Beat Viral "Cosmic Dreams"', views: '89M', icon: Music, hot: true, growth: '+210%', creator: '@musicprod_fr', hashtags: ['#cosmicdreams', '#beat'], duration: '30s', country: '🇫🇷', ageGroup: '18-25' },
      { rank: 3, type: 'trend', title: 'Challenge Téléportation', views: '76M', icon: Zap, hot: true, growth: '+280%', creator: '@tech_magic', hashtags: ['#teleport', '#magic'], duration: '12s', country: '🇺🇸', ageGroup: '13-22' },
      { rank: 4, type: 'product', title: 'Gadget LED Holographique', views: '67M', icon: ShoppingBag, hot: false, growth: '+156%', creator: '@gadget_review', hashtags: ['#tech', '#led'], duration: '45s', country: '🇰🇷', ageGroup: '20-30' },
      { rank: 5, type: 'joke', title: 'Blague du Chat Ninja', views: '45M', icon: Smile, hot: false, growth: '+89%', creator: '@humor_daily', hashtags: ['#cat', '#ninja'], duration: '8s', country: '🇯🇵', ageGroup: '15-25' },
      { rank: 6, type: 'gaming', title: 'Trick Shot Gaming Epic', views: '34M', icon: Gamepad2, hot: false, growth: '+67%', creator: '@gaming_pro', hashtags: ['#gaming', '#trickshot'], duration: '22s', country: '🇧🇷', ageGroup: '16-28' },
      { rank: 7, type: 'food', title: 'Recette 60 Secondes', views: '28M', icon: Heart, hot: false, growth: '+45%', creator: '@quick_chef', hashtags: ['#cooking', '#quick'], duration: '60s', country: '🇮🇹', ageGroup: '25-35' },
      { rank: 8, type: 'beauty', title: 'Makeup Transformation', views: '23M', icon: Star, hot: false, growth: '+34%', creator: '@beauty_guru', hashtags: ['#makeup', '#glow'], duration: '35s', country: '🇮🇳', ageGroup: '18-30' },
      { rank: 9, type: 'tech', title: 'AI Robot Domestique', views: '18M', icon: Brain, hot: false, growth: '+28%', creator: '@tech_future', hashtags: ['#ai', '#robot'], duration: '40s', country: '🇨🇳', ageGroup: '22-35' },
      { rank: 10, type: 'sport', title: 'Trick Football Insane', views: '15M', icon: Activity, hot: false, growth: '+21%', creator: '@football_tricks', hashtags: ['#football', '#skills'], duration: '18s', country: '🇪🇸', ageGroup: '14-26' },
      { rank: 11, type: 'dance', title: 'Chorégraphie K-Pop', views: '12M', icon: Move, hot: false, growth: '+18%', creator: '@kpop_dance', hashtags: ['#kpop', '#dance'], duration: '25s', country: '🇰🇷', ageGroup: '15-23' },
      { rank: 12, type: 'music', title: 'Remix House Partie', views: '9M', icon: Music, hot: false, growth: '+15%', creator: '@house_dj', hashtags: ['#house', '#party'], duration: '30s', country: '🇳🇱', ageGroup: '20-28' },
      { rank: 13, type: 'trend', title: 'Défi Mode Vintage', views: '7M', icon: Zap, hot: false, growth: '+12%', creator: '@vintage_style', hashtags: ['#vintage', '#fashion'], duration: '20s', country: '🇬🇧', ageGroup: '18-27' },
      { rank: 14, type: 'joke', title: 'Parodie Prof Mathématiques', views: '5M', icon: Smile, hot: false, growth: '+9%', creator: '@math_fun', hashtags: ['#school', '#math'], duration: '15s', country: '🇨🇦', ageGroup: '16-24' },
      { rank: 15, type: 'product', title: 'Sneakers Auto-Laçage', views: '3M', icon: ShoppingBag, hot: false, growth: '+6%', creator: '@sneaker_tech', hashtags: ['#sneakers', '#tech'], duration: '25s', country: '🇺🇸', ageGroup: '18-30' }
    ]
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    color: '#e4405f',
    gradient: 'linear-gradient(135deg, #e4405f, #f77a52, #fccc63)',
    users: '2.0B',
    growth: '+18%',
    engagement: '3.9%',
    avgWatchTime: '28m',
    topCountry: '🇺🇸 USA',
    trends: [
      { rank: 1, type: 'beauty', title: 'Transformation Cyber Glow', views: '203M', icon: Star, hot: true, growth: '+420%', creator: '@cyber_beauty', hashtags: ['#cyborglow', '#makeup'], country: '🇺🇸', ageGroup: '18-25' },
      { rank: 2, type: 'product', title: 'Sneakers Holographiques', views: '145M', icon: ShoppingBag, hot: true, growth: '+356%', creator: '@sneaker_head', hashtags: ['#holographic', '#sneakers'], country: '🇯🇵', ageGroup: '16-28' },
      { rank: 3, type: 'food', title: 'Café Art Latte Perfect', views: '92M', icon: Heart, hot: true, growth: '+298%', creator: '@coffee_artist', hashtags: ['#latteart', '#coffee'], country: '🇮🇹', ageGroup: '22-35' },
      { rank: 4, type: 'trend', title: 'Aesthetic Minimaliste', views: '78M', icon: Zap, hot: false, growth: '+234%', creator: '@minimal_life', hashtags: ['#minimal', '#aesthetic'], country: '🇸🇪', ageGroup: '20-30' },
      { rank: 5, type: 'music', title: 'Covers Acoustiques Virales', views: '56M', icon: Music, hot: false, growth: '+187%', creator: '@acoustic_soul', hashtags: ['#acoustic', '#covers'], country: '🇬🇧', ageGroup: '18-26' },
      { rank: 6, type: 'tech', title: 'Setup Gaming RGB', views: '41M', icon: Brain, hot: false, growth: '+156%', creator: '@gaming_setup', hashtags: ['#gaming', '#rgb'], country: '🇩🇪', ageGroup: '16-25' },
      { rank: 7, type: 'dance', title: 'Flow Futuriste 2025', views: '35M', icon: Move, hot: false, growth: '+123%', creator: '@future_flow', hashtags: ['#futuredance', '#flow'], country: '🇫🇷', ageGroup: '17-24' },
      { rank: 8, type: 'sport', title: 'Workout Home Edition', views: '29M', icon: Activity, hot: false, growth: '+98%', creator: '@fitness_home', hashtags: ['#homeworkout', '#fit'], country: '🇦🇺', ageGroup: '20-35' },
      { rank: 9, type: 'beauty', title: 'Skincare Routine Coréenne', views: '22M', icon: Star, hot: false, growth: '+76%', creator: '@korean_skin', hashtags: ['#skincare', '#kbeauty'], country: '🇰🇷', ageGroup: '18-28' },
      { rank: 10, type: 'joke', title: 'Meme Pet Compilation', views: '16M', icon: Smile, hot: false, growth: '+54%', creator: '@pet_memes', hashtags: ['#pets', '#funny'], country: '🇺🇸', ageGroup: '16-30' },
      { rank: 11, type: 'food', title: 'Desserts Sans Sucre', views: '13M', icon: Heart, hot: false, growth: '+42%', creator: '@healthy_sweets', hashtags: ['#healthy', '#desserts'], country: '🇨🇦', ageGroup: '25-40' },
      { rank: 12, type: 'trend', title: 'Mode Sustainable Fashion', views: '10M', icon: Zap, hot: false, growth: '+35%', creator: '@eco_fashion', hashtags: ['#sustainable', '#fashion'], country: '🇳🇴', ageGroup: '22-32' },
      { rank: 13, type: 'tech', title: 'Gadgets Bureau 2025', views: '8M', icon: Brain, hot: false, growth: '+28%', creator: '@office_tech', hashtags: ['#office', '#gadgets'], country: '🇯🇵', ageGroup: '25-40' },
      { rank: 14, type: 'gaming', title: 'Mobile Gaming Setup', views: '6M', icon: Gamepad2, hot: false, growth: '+22%', creator: '@mobile_gamer', hashtags: ['#mobile', '#gaming'], country: '🇮🇳', ageGroup: '16-25' },
      { rank: 15, type: 'music', title: 'Playlist Étude Productivité', views: '4M', icon: Music, hot: false, growth: '+18%', creator: '@study_beats', hashtags: ['#study', '#productivity'], country: '🇫🇮', ageGroup: '18-25' }
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    color: '#ff0000',
    gradient: 'linear-gradient(135deg, #ff0000, #ff4545)',
    users: '2.7B',
    growth: '+42%',
    engagement: '6.2%',
    avgWatchTime: '40m',
    topCountry: '🇮🇳 India',
    trends: [
      { rank: 1, type: 'tech', title: 'Tuto Hacking Éthique 2025', views: '876M', icon: Brain, hot: true, growth: '+567%', creator: '@ethical_hacker', hashtags: ['#hacking', '#cybersecurity'], duration: '45m', country: '🇺🇸', ageGroup: '22-35' },
      { rank: 2, type: 'music', title: 'Album "Digital Dreams" Full', views: '567M', icon: Music, hot: true, growth: '+445%', creator: '@digital_artist', hashtags: ['#music', '#album'], duration: '52m', country: '🇸🇪', ageGroup: '16-30' },
      { rank: 3, type: 'gaming', title: 'Speedrun World Record', views: '432M', icon: Gamepad2, hot: true, growth: '+378%', creator: '@speedrun_king', hashtags: ['#speedrun', '#gaming'], duration: '2h15m', country: '🇯🇵', ageGroup: '16-28' },
      { rank: 4, type: 'food', title: 'Cuisine Michelin Maison', views: '234M', icon: Heart, hot: false, growth: '+289%', creator: '@chef_michelin', hashtags: ['#cooking', '#michelin'], duration: '35m', country: '🇫🇷', ageGroup: '25-45' },
      { rank: 5, type: 'tech', title: 'Build PC Gaming 2025', views: '156M', icon: Brain, hot: false, growth: '+234%', creator: '@pc_builder', hashtags: ['#pc', '#build'], duration: '1h20m', country: '🇩🇪', ageGroup: '18-30' },
      { rank: 6, type: 'sport', title: 'Entraînement Olympique', views: '123M', icon: Activity, hot: false, growth: '+198%', creator: '@olympic_coach', hashtags: ['#training', '#olympics'], duration: '42m', country: '🇺🇸', ageGroup: '20-35' },
      { rank: 7, type: 'beauty', title: 'Transformation Complète 24h', views: '98M', icon: Star, hot: false, growth: '+167%', creator: '@makeover_expert', hashtags: ['#transformation', '#24h'], duration: '28m', country: '🇰🇷', ageGroup: '18-28' },
      { rank: 8, type: 'joke', title: 'Comédie Stand-Up Viral', views: '87M', icon: Smile, hot: false, growth: '+145%', creator: '@comedy_central', hashtags: ['#comedy', '#standup'], duration: '1h05m', country: '🇬🇧', ageGroup: '22-40' },
      { rank: 9, type: 'trend', title: 'Analyse Tendances 2025', views: '65M', icon: Zap, hot: false, growth: '+123%', creator: '@trend_analyst', hashtags: ['#trends', '#2025'], duration: '55m', country: '🇨🇦', ageGroup: '25-40' },
      { rank: 10, type: 'dance', title: 'Chorégraphie Professionnelle', views: '43M', icon: Move, hot: false, growth: '+98%', creator: '@pro_dancer', hashtags: ['#dance', '#professional'], duration: '15m', country: '🇧🇷', ageGroup: '16-25' },
      { rank: 11, type: 'product', title: 'Review Tech 2025 Complete', views: '32M', icon: ShoppingBag, hot: false, growth: '+85%', creator: '@tech_reviewer', hashtags: ['#review', '#tech2025'], duration: '1h30m', country: '🇺🇸', ageGroup: '20-35' },
      { rank: 12, type: 'gaming', title: 'Guide Complet MMORPG', views: '28M', icon: Gamepad2, hot: false, growth: '+72%', creator: '@mmo_guide', hashtags: ['#mmorpg', '#guide'], duration: '2h45m', country: '🇰🇷', ageGroup: '18-30' },
      { rank: 13, type: 'music', title: 'Production Musicale Tutorial', views: '24M', icon: Music, hot: false, growth: '+65%', creator: '@music_producer', hashtags: ['#production', '#tutorial'], duration: '1h10m', country: '🇳🇱', ageGroup: '20-32' },
      { rank: 14, type: 'food', title: 'Street Food Tour Monde', views: '19M', icon: Heart, hot: false, growth: '+58%', creator: '@food_explorer', hashtags: ['#streetfood', '#travel'], duration: '38m', country: '🇹🇭', ageGroup: '22-35' },
      { rank: 15, type: 'tech', title: 'IA et Futur Travail', views: '15M', icon: Brain, hot: false, growth: '+51%', creator: '@ai_future', hashtags: ['#ai', '#future'], duration: '47m', country: '🇺🇸', ageGroup: '25-45' }
    ]
  },
  {
    id: 'twitter',
    name: 'Twitter/X',
    icon: Twitter,
    color: '#1da1f2',
    gradient: 'linear-gradient(135deg, #1da1f2, #0084b4)',
    users: '450M',
    growth: '+15%',
    engagement: '2.1%',
    avgWatchTime: '12m',
    topCountry: '🇺🇸 USA',
    trends: [
      { rank: 1, type: 'trend', title: '#TechRevolution2025', views: '89M', icon: Zap, hot: true, growth: '+890%', creator: '@tech_news', hashtags: ['#TechRevolution2025'], country: '🇺🇸', ageGroup: '25-40' },
      { rank: 2, type: 'joke', title: 'Meme Monday Compilation', views: '67M', icon: Smile, hot: true, growth: '+456%', creator: '@meme_lord', hashtags: ['#MemeMondlay'], country: '🇺🇸', ageGroup: '18-30' },
      { rank: 3, type: 'tech', title: 'Thread IA Breakthrough', views: '45M', icon: Brain, hot: true, growth: '+234%', creator: '@ai_researcher', hashtags: ['#AI', '#breakthrough'], country: '🇬🇧', ageGroup: '25-45' },
      { rank: 4, type: 'sport', title: 'Live Scores World Cup', views: '34M', icon: Activity, hot: false, growth: '+123%', creator: '@sports_live', hashtags: ['#WorldCup'], country: '🇧🇷', ageGroup: '20-40' },
      { rank: 5, type: 'music', title: 'New Album Trending', views: '28M', icon: Music, hot: false, growth: '+98%', creator: '@music_charts', hashtags: ['#NewMusic'], country: '🇺🇸', ageGroup: '16-35' },
      { rank: 6, type: 'trend', title: '#EcoFriendlyLiving', views: '23M', icon: Zap, hot: false, growth: '+76%', creator: '@eco_warrior', hashtags: ['#EcoFriendlyLiving'], country: '🇸🇪', ageGroup: '22-40' },
      { rank: 7, type: 'tech', title: 'Crypto Market Analysis', views: '19M', icon: Brain, hot: false, growth: '+65%', creator: '@crypto_expert', hashtags: ['#Crypto'], country: '🇺🇸', ageGroup: '25-45' },
      { rank: 8, type: 'joke', title: 'Daily Dose of Humor', views: '16M', icon: Smile, hot: false, growth: '+54%', creator: '@daily_laughs', hashtags: ['#Humor'], country: '🇬🇧', ageGroup: '20-35' },
      { rank: 9, type: 'trend', title: '#WorkFromHome Tips', views: '14M', icon: Zap, hot: false, growth: '+48%', creator: '@remote_work', hashtags: ['#WorkFromHome'], country: '🇨🇦', ageGroup: '25-40' },
      { rank: 10, type: 'tech', title: 'Gadget Review Thread', views: '12M', icon: Brain, hot: false, growth: '+42%', creator: '@gadget_guru', hashtags: ['#GadgetReview'], country: '🇯🇵', ageGroup: '22-35' },
      { rank: 11, type: 'sport', title: 'Transfer News Football', views: '10M', icon: Activity, hot: false, growth: '+38%', creator: '@transfer_news', hashtags: ['#Transfers'], country: '🇪🇸', ageGroup: '18-35' },
      { rank: 12, type: 'music', title: 'Behind Scenes Studio', views: '8M', icon: Music, hot: false, growth: '+34%', creator: '@studio_insider', hashtags: ['#BehindTheScenes'], country: '🇺🇸', ageGroup: '20-30' },
      { rank: 13, type: 'trend', title: '#SustainableFashion', views: '7M', icon: Zap, hot: false, growth: '+31%', creator: '@fashion_future', hashtags: ['#SustainableFashion'], country: '🇫🇷', ageGroup: '22-35' },
      { rank: 14, type: 'joke', title: 'Office Life Memes', views: '6M', icon: Smile, hot: false, growth: '+28%', creator: '@office_humor', hashtags: ['#OfficeLife'], country: '🇺🇸', ageGroup: '25-40' },
      { rank: 15, type: 'tech', title: 'Open Source Projects', views: '5M', icon: Brain, hot: false, growth: '+25%', creator: '@open_source', hashtags: ['#OpenSource'], country: '🇩🇪', ageGroup: '22-40' }
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Briefcase,
    color: '#0077b5',
    gradient: 'linear-gradient(135deg, #0077b5, #005885)',
    users: '900M',
    growth: '+25%',
    engagement: '4.2%',
    avgWatchTime: '8m',
    topCountry: '🇺🇸 USA',
    trends: [
      { rank: 1, type: 'tech', title: 'IA dans le Recrutement', views: '23M', icon: Brain, hot: true, growth: '+345%', creator: '@hr_innovation', hashtags: ['#AI', '#Recruitment'], country: '🇺🇸', ageGroup: '25-45' },
      { rank: 2, type: 'trend', title: 'Remote Work Best Practices', views: '18M', icon: Zap, hot: true, growth: '+234%', creator: '@remote_expert', hashtags: ['#RemoteWork'], country: '🇨🇦', ageGroup: '25-40' },
      { rank: 3, type: 'tech', title: 'Cybersecurity Trends 2025', views: '15M', icon: Brain, hot: true, growth: '+189%', creator: '@cyber_security', hashtags: ['#Cybersecurity'], country: '🇬🇧', ageGroup: '28-45' },
      { rank: 4, type: 'trend', title: 'Leadership Digital Era', views: '12M', icon: Zap, hot: false, growth: '+145%', creator: '@leadership_guru', hashtags: ['#Leadership'], country: '🇺🇸', ageGroup: '30-50' },
      { rank: 5, type: 'tech', title: 'Cloud Migration Success', views: '10M', icon: Brain, hot: false, growth: '+123%', creator: '@cloud_architect', hashtags: ['#Cloud'], country: '🇩🇪', ageGroup: '25-40' },
      { rank: 6, type: 'trend', title: 'Sustainable Business', views: '8M', icon: Zap, hot: false, growth: '+98%', creator: '@green_business', hashtags: ['#Sustainability'], country: '🇸🇪', ageGroup: '28-45' },
      { rank: 7, type: 'tech', title: 'Data Science Career Path', views: '7M', icon: Brain, hot: false, growth: '+87%', creator: '@data_scientist', hashtags: ['#DataScience'], country: '🇮🇳', ageGroup: '22-35' },
      { rank: 8, type: 'trend', title: 'Networking Digital Tips', views: '6M', icon: Zap, hot: false, growth: '+76%', creator: '@networking_pro', hashtags: ['#Networking'], country: '🇺🇸', ageGroup: '25-40' },
      { rank: 9, type: 'tech', title: 'DevOps Best Practices', views: '5M', icon: Brain, hot: false, growth: '+65%', creator: '@devops_expert', hashtags: ['#DevOps'], country: '🇳🇱', ageGroup: '25-40' },
      { rank: 10, type: 'trend', title: 'Personal Branding 2025', views: '4M', icon: Zap, hot: false, growth: '+54%', creator: '@brand_yourself', hashtags: ['#PersonalBranding'], country: '🇦🇺', ageGroup: '22-40' },
      { rank: 11, type: 'tech', title: 'Machine Learning ROI', views: '3M', icon: Brain, hot: false, growth: '+48%', creator: '@ml_business', hashtags: ['#MachineLearning'], country: '🇺🇸', ageGroup: '28-45' },
      { rank: 12, type: 'trend', title: 'Startup Funding Trends', views: '3M', icon: Zap, hot: false, growth: '+42%', creator: '@startup_insider', hashtags: ['#Startup'], country: '🇺🇸', ageGroup: '25-40' },
      { rank: 13, type: 'tech', title: 'UX Design Evolution', views: '2M', icon: Brain, hot: false, growth: '+38%', creator: '@ux_designer', hashtags: ['#UXDesign'], country: '🇫🇷', ageGroup: '24-38' },
      { rank: 14, type: 'trend', title: 'Work-Life Balance Tips', views: '2M', icon: Zap, hot: false, growth: '+35%', creator: '@wellness_work', hashtags: ['#WorkLifeBalance'], country: '🇩🇰', ageGroup: '25-45' },
      { rank: 15, type: 'tech', title: 'Blockchain Enterprise Use', views: '2M', icon: Brain, hot: false, growth: '+32%', creator: '@blockchain_biz', hashtags: ['#Blockchain'], country: '🇨🇭', ageGroup: '30-50' }
    ]
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    icon: Camera,
    color: '#fffc00',
    gradient: 'linear-gradient(135deg, #fffc00, #ffed4e)',
    users: '750M',
    growth: '+12%',
    engagement: '7.1%',
    avgWatchTime: '30m',
    topCountry: '🇺🇸 USA',
    trends: [
      { rank: 1, type: 'beauty', title: 'Filtre Alien Transformation', views: '234M', icon: Star, hot: true, growth: '+567%', creator: '@alien_beauty', hashtags: ['#AlienFilter'], duration: '3s', country: '🇺🇸', ageGroup: '13-22' },
      { rank: 2, type: 'dance', title: 'Snap Dance Challenge', views: '123M', icon: Move, hot: true, growth: '+345%', creator: '@snap_dancer', hashtags: ['#SnapDance'], duration: '10s', country: '🇺🇸', ageGroup: '14-24' },
      { rank: 3, type: 'joke', title: 'Comedy Lens Viral', views: '89M', icon: Smile, hot: true, growth: '+234%', creator: '@comedy_snap', hashtags: ['#ComedyLens'], duration: '5s', country: '🇬🇧', ageGroup: '15-25' },
      { rank: 4, type: 'trend', title: 'Outfit of the Day', views: '67M', icon: Zap, hot: false, growth: '+189%', creator: '@fashion_snap', hashtags: ['#OOTD'], duration: '8s', country: '🇫🇷', ageGroup: '16-26' },
      { rank: 5, type: 'beauty', title: 'Glow Up Tuesday', views: '45M', icon: Star, hot: false, growth: '+145%', creator: '@glow_tuesday', hashtags: ['#GlowUp'], duration: '6s', country: '🇰🇷', ageGroup: '16-24' },
      { rank: 6, type: 'food', title: 'Food Art Snap', views: '34M', icon: Heart, hot: false, growth: '+123%', creator: '@food_artist', hashtags: ['#FoodArt'], duration: '4s', country: '🇮🇹', ageGroup: '18-28' },
      { rank: 7, type: 'tech', title: 'AR Tech Demo', views: '28M', icon: Brain, hot: false, growth: '+98%', creator: '@ar_tech', hashtags: ['#ARDemo'], duration: '12s', country: '🇺🇸', ageGroup: '20-30' },
      { rank: 8, type: 'gaming', title: 'Game Score Snap', views: '23M', icon: Gamepad2, hot: false, growth: '+87%', creator: '@gaming_snap', hashtags: ['#Gaming'], duration: '7s', country: '🇯🇵', ageGroup: '16-25' },
      { rank: 9, type: 'sport', title: 'Workout Wednesday', views: '19M', icon: Activity, hot: false, growth: '+76%', creator: '@fit_snap', hashtags: ['#WorkoutWednesday'], duration: '9s', country: '🇦🇺', ageGroup: '18-30' },
      { rank: 10, type: 'music', title: 'Sound Reaction Snap', views: '16M', icon: Music, hot: false, growth: '+65%', creator: '@music_react', hashtags: ['#MusicReaction'], duration: '6s', country: '🇺🇸', ageGroup: '16-26' },
      { rank: 11, type: 'dance', title: 'Quick Choreo', views: '14M', icon: Move, hot: false, growth: '+58%', creator: '@quick_dance', hashtags: ['#QuickChoreo'], duration: '8s', country: '🇧🇷', ageGroup: '15-23' },
      { rank: 12, type: 'joke', title: 'Pet Funny Moments', views: '12M', icon: Smile, hot: false, growth: '+52%', creator: '@pet_comedy', hashtags: ['#PetFunny'], duration: '5s', country: '🇨🇦', ageGroup: '16-30' },
      { rank: 13, type: 'beauty', title: 'Makeup Time Lapse', views: '10M', icon: Star, hot: false, growth: '+46%', creator: '@makeup_time', hashtags: ['#MakeupTimeLapse'], duration: '10s', country: '🇮🇳', ageGroup: '17-25' },
      { rank: 14, type: 'trend', title: 'Study Aesthetic', views: '8M', icon: Zap, hot: false, growth: '+42%', creator: '@study_vibes', hashtags: ['#StudyAesthetic'], duration: '6s', country: '🇯🇵', ageGroup: '16-22' },
      { rank: 15, type: 'food', title: 'Recipe in 10 Seconds', views: '7M', icon: Heart, hot: false, growth: '+38%', creator: '@quick_recipe', hashtags: ['#QuickRecipe'], duration: '10s', country: '🇲🇽', ageGroup: '20-30' }
    ]
  },
  {
    id: 'twitch',
    name: 'Twitch',
    icon: Video,
    color: '#9146ff',
    gradient: 'linear-gradient(135deg, #9146ff, #6f2dff)',
    users: '140M',
    growth: '+35%',
    engagement: '8.4%',
    avgWatchTime: '95m',
    topCountry: '🇺🇸 USA',
    trends: [
      { rank: 1, type: 'gaming', title: 'Speedrun World Record Live', views: '45M', icon: Gamepad2, hot: true, growth: '+456%', creator: '@speedrun_legend', hashtags: ['#Speedrun'], duration: '3h45m', country: '🇯🇵', ageGroup: '16-28' },
      { rank: 2, type: 'gaming', title: 'New Game First Look', views: '34M', icon: Gamepad2, hot: true, growth: '+234%', creator: '@first_look_gaming', hashtags: ['#NewGame'], duration: '2h30m', country: '🇺🇸', ageGroup: '18-30' },
      { rank: 3, type: 'tech', title: 'Coding Live Marathon', views: '23M', icon: Brain, hot: true, growth: '+189%', creator: '@code_marathon', hashtags: ['#Coding'], duration: '8h', country: '🇮🇳', ageGroup: '20-35' },
      { rank: 4, type: 'gaming', title: 'Tournament Finals', views: '19M', icon: Gamepad2, hot: false, growth: '+145%', creator: '@esports_official', hashtags: ['#Tournament'], duration: '4h15m', country: '🇰🇷', ageGroup: '16-25' },
      { rank: 5, type: 'music', title: 'DJ Set Electronic Live', views: '15M', icon: Music, hot: false, growth: '+123%', creator: '@dj_electronic', hashtags: ['#DJSet'], duration: '2h', country: '🇳🇱', ageGroup: '18-30' },
      { rank: 6, type: 'gaming', title: 'Retro Gaming Marathon', views: '12M', icon: Gamepad2, hot: false, growth: '+98%', creator: '@retro_gamer', hashtags: ['#RetroGaming'], duration: '6h', country: '🇺🇸', ageGroup: '22-35' },
      { rank: 7, type: 'tech', title: 'Hardware Build Stream', views: '10M', icon: Brain, hot: false, growth: '+87%', creator: '@pc_builder_live', hashtags: ['#PCBuild'], duration: '3h', country: '🇩🇪', ageGroup: '20-32' },
      { rank: 8, type: 'gaming', title: 'Indie Game Showcase', views: '8M', icon: Gamepad2, hot: false, growth: '+76%', creator: '@indie_showcase', hashtags: ['#IndieGames'], duration: '4h', country: '🇬🇧', ageGroup: '18-28' },
      { rank: 9, type: 'joke', title: 'Comedy Gaming Stream', views: '7M', icon: Smile, hot: false, growth: '+65%', creator: '@comedy_gamer', hashtags: ['#ComedyGaming'], duration: '2h30m', country: '🇨🇦', ageGroup: '19-30' },
      { rank: 10, type: 'music', title: 'Live Music Production', views: '6M', icon: Music, hot: false, growth: '+58%', creator: '@music_producer_live', hashtags: ['#MusicProduction'], duration: '3h15m', country: '🇸🇪', ageGroup: '20-32' },
      { rank: 11, type: 'gaming', title: 'Minecraft Creative Build', views: '5M', icon: Gamepad2, hot: false, growth: '+52%', creator: '@minecraft_artist', hashtags: ['#Minecraft'], duration: '5h', country: '🇳🇴', ageGroup: '12-22' },
      { rank: 12, type: 'tech', title: 'AI Development Live', views: '4M', icon: Brain, hot: false, growth: '+46%', creator: '@ai_developer', hashtags: ['#AIDev'], duration: '4h30m', country: '🇺🇸', ageGroup: '25-40' },
      { rank: 13, type: 'gaming', title: 'Mobile Gaming Tournament', views: '4M', icon: Gamepad2, hot: false, growth: '+42%', creator: '@mobile_esports', hashtags: ['#MobileGaming'], duration: '3h', country: '🇮🇳', ageGroup: '16-25' },
      { rank: 14, type: 'music', title: 'Acoustic Sessions Live', views: '3M', icon: Music, hot: false, growth: '+38%', creator: '@acoustic_live', hashtags: ['#Acoustic'], duration: '1h45m', country: '🇮🇪', ageGroup: '18-35' },
      { rank: 15, type: 'tech', title: 'Web Dev Tutorial Live', views: '3M', icon: Brain, hot: false, growth: '+35%', creator: '@webdev_teacher', hashtags: ['#WebDev'], duration: '2h15m', country: '🇫🇷', ageGroup: '20-30' }
    ]
  }
];

// ===== TYPES DE TENDANCES (10 catégories) =====
const TREND_TYPES = {
  all: { color: '#667eea', label: 'Toutes les tendances', icon: BarChart3, bg: 'rgba(102, 126, 234, 0.2)' },
  dance: { color: '#8b5cf6', label: 'Danses', icon: Move, bg: 'rgba(139, 92, 246, 0.2)' },
  music: { color: '#06b6d4', label: 'Musiques', icon: Music, bg: 'rgba(6, 182, 212, 0.2)' },
  joke: { color: '#f59e0b', label: 'Humour', icon: Smile, bg: 'rgba(245, 158, 11, 0.2)' },
  product: { color: '#10b981', label: 'Produits', icon: ShoppingBag, bg: 'rgba(16, 185, 129, 0.2)' },
  trend: { color: '#ef4444', label: 'Trends', icon: Zap, bg: 'rgba(239, 68, 68, 0.2)' },
  gaming: { color: '#8b5cf6', label: 'Gaming', icon: Gamepad2, bg: 'rgba(139, 92, 246, 0.2)' },
  food: { color: '#f97316', label: 'Cuisine', icon: Heart, bg: 'rgba(249, 115, 22, 0.2)' },
  beauty: { color: '#ec4899', label: 'Beauté', icon: Star, bg: 'rgba(236, 72, 153, 0.2)' },
  tech: { color: '#3b82f6', label: 'Tech', icon: Brain, bg: 'rgba(59, 130, 246, 0.2)' },
  sport: { color: '#22c55e', label: 'Sport', icon: Activity, bg: 'rgba(34, 197, 94, 0.2)' }
};

// ===== COMPOSANT PRINCIPAL =====
export default function EnhancedTrendsPage() {
  // États principaux (sans interfaces TypeScript)
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedNetwork, setSelectedNetwork] = useState('tiktok');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [particlePositions, setParticlePositions] = useState([]);
  const [waveAnimation, setWaveAnimation] = useState(0);
  const [matrixRain, setMatrixRain] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Hook pour détecter le côté client (évite les erreurs d'hydratation)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Hook principal pour les animations
  useEffect(() => {
    if (!isClient) return;

    // Timer pour l'horloge
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Initialisation des particules avec valeurs fixes
    const particles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: (i * 4) % 100,
      y: (i * 6) % 100,
      size: 2 + (i % 5),
      speed: 0.1 + (i % 4) * 0.1,
      opacity: 0.2 + (i % 6) * 0.1,
    }));

    // Initialisation Matrix Rain
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const rainDrops = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: (i * 2.86) % 100,
      characters: Array.from({ length: 12 }, (_, j) =>
        matrixChars[(i + j) % matrixChars.length]
      ),
      speed: 0.8 + (i % 4) * 0.3,
    }));

    setParticlePositions(particles);
    setMatrixRain(rainDrops);

    // Animation des particules
    const particleInterval = setInterval(() => {
      setParticlePositions(prev =>
        prev.map(particle => ({
          ...particle,
          y: (particle.y + particle.speed) % 100,
          opacity: 0.2 + Math.sin(Date.now() * 0.001 + particle.id) * 0.4,
        }))
      );
    }, 60);

    // Animation wave
    const waveInterval = setInterval(() => {
      setWaveAnimation(prev => (prev + 1) % 360);
    }, 50);

    // Animation matrix
    const matrixInterval = setInterval(() => {
      setMatrixRain(prev =>
        prev.map(column => ({
          ...column,
          characters: column.characters.map((char, index) =>
            Math.random() > 0.97
              ? matrixChars[Math.floor(Math.random() * matrixChars.length)]
              : char
          ),
        }))
      );
    }, 120);

    return () => {
      clearInterval(timeInterval);
      clearInterval(particleInterval);
      clearInterval(waveInterval);
      clearInterval(matrixInterval);
    };
  }, [isClient]);

  // Handlers pour les changements
  const handleNetworkChange = useCallback((networkId) => {
    setSelectedNetwork(networkId);
  }, []);

  const handleFilterChange = useCallback((filter) => {
    setSelectedFilter(filter);
  }, []);

  // Données calculées
  const currentNetwork = useMemo(() => 
    SOCIAL_NETWORKS.find(network => network.id === selectedNetwork) || SOCIAL_NETWORKS[0],
    [selectedNetwork]
  );

  const filteredTrends = useMemo(() => {
    if (selectedFilter === 'all') {
      return currentNetwork.trends;
    }
    return currentNetwork.trends.filter(trend => trend.type === selectedFilter);
  }, [currentNetwork.trends, selectedFilter]);

  // Fonction pour formater l'heure
  const formatTime = useCallback((date) => {
    return date.toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  }, []);

  // Écran de chargement pendant l'hydratation
  if (!isClient) {
    return (
      <div style={styles.pageContainer}>
        <div style={styles.loadingContainer}>
          <div style={styles.loadingSpinner}>
            <Sparkles size={32} style={{ color: '#ffffff', marginBottom: '16px' }} />
            <div>Chargement des tendances...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.pageContainer}>
      {/* ===== EFFETS D'ARRIÈRE-PLAN ===== */}
      
      {/* Particules animées */}
      <div style={styles.particleBackground}>
        {particlePositions.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* Matrix Rain */}
      <div style={styles.matrixBackground}>
        {matrixRain.map(column => (
          <div
            key={column.id}
            style={{
              ...styles.matrixColumn,
              left: `${column.x}%`,
              animationDuration: `${column.speed}s`,
            }}
          >
            {column.characters.map((char, i) => (
              <span key={i} style={styles.matrixChar}>
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Éléments décoratifs flottants */}
      <div style={styles.floatingElements}>
        <div style={{...styles.floatingElement, ...styles.floatingElement1}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement2}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement3}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement4}}></div>
      </div>

      {/* ===== HEADER HERO MODERNE ===== */}
      <header style={styles.heroHeader}>
        <div style={styles.container}>
          {/* Badge temps réel avec plus d'infos */}
          <div style={styles.badgeContainer}>
            <div style={styles.badge}>
              <Flame size={16} style={styles.badgeIcon} />
              <span>🔥 Analyse en temps réel - {formatTime(currentTime)}</span>
              <div style={styles.badgeDivider}></div>
              <Globe size={14} />
              <span>7 réseaux sociaux</span>
            </div>
          </div>

          {/* Titre amélioré */}
          <h1 style={styles.title}>
            <span>Observatoire Global</span>
            <span style={styles.titleHighlight}>des Tendances Digitales</span>
          </h1>

          {/* Description enrichie */}
          <p style={styles.description}>
            Découvrez lécosystème complet des tendances virales sur 7 plateformes majeures. 
            Plus de 100 tendances analysées en temps réel avec données démographiques, géolocalisation et métriques avancées 🚀
          </p>

          {/* Nouvelles statistiques globales */}
          <div style={styles.globalStats}>
            <div style={styles.statItem}>
              <Users size={24} style={styles.statIcon} />
              <div>
                <div style={styles.statNumber}>6.9B+</div>
                <div style={styles.statLabel}>Utilisateurs Total</div>
              </div>
            </div>
            <div style={styles.statItem}>
              <TrendingUp size={24} style={styles.statIcon} />
              <div>
                <div style={styles.statNumber}>105</div>
                <div style={styles.statLabel}>Tendances Actives</div>
              </div>
            </div>
            <div style={styles.statItem}>
              <Activity size={24} style={styles.statIcon} />
              <div>
                <div style={styles.statNumber}>4.8%</div>
                <div style={styles.statLabel}>Engagement Moyen</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== CONTENU PRINCIPAL ===== */}
      <main style={styles.mainContent}>
        <div style={styles.container}>
          
          <div style={styles.mainLayout}>
            
            {/* ===== SIDEBAR RÉSEAUX SOCIAUX ===== */}
            <aside style={styles.networkSidebar}>
              <div style={styles.sidebarHeader}>
                <div style={styles.sidebarIconContainer}>
                  <Globe size={24} style={styles.sidebarIcon} />
                </div>
                <div>
                  <h3 style={styles.sidebarTitle}>Réseaux Sociaux</h3>
                  <p style={styles.sidebarSubtitle}>7 plateformes • 6.9B utilisateurs</p>
                </div>
              </div>

              {/* Liste des réseaux */}
              <div style={styles.networkList}>
                {SOCIAL_NETWORKS.map((network) => {
                  const isActive = selectedNetwork === network.id;
                  return (
                    <div
                      key={network.id}
                      style={{
                        ...styles.networkItem,
                        ...(isActive ? {
                          transform: 'translateX(12px) scale(1.02)',
                          boxShadow: `0 15px 40px ${network.color}50`,
                          borderColor: network.color,
                          background: `${network.color}20`,
                        } : {})
                      }}
                      onClick={() => handleNetworkChange(network.id)}
                    >
                      <div style={{
                        ...styles.networkItemIcon,
                        background: network.gradient,
                        boxShadow: isActive ? `0 8px 20px ${network.color}60` : 'none'
                      }}>
                        <network.icon size={24} style={{ color: 'white' }} />
                      </div>

                      <div style={styles.networkItemInfo}>
                        <h4 style={styles.networkItemName}>{network.name}</h4>
                        <div style={styles.networkItemStats}>
                          <div style={styles.networkStatRow}>
                            <Users size={12} />
                            <span>{network.users} utilisateurs</span>
                          </div>
                          <div style={styles.networkStatRow}>
                            <TrendingUp size={12} />
                            <span style={styles.networkItemGrowth}>{network.growth}</span>
                          </div>
                          <div style={styles.networkStatRow}>
                            <Eye size={12} />
                            <span>{network.engagement} engagement</span>
                          </div>
                          {network.avgWatchTime && (
                            <div style={styles.networkStatRow}>
                              <Clock size={12} />
                              <span>{network.avgWatchTime} temps moyen</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {isActive && (
                        <div style={styles.activeIndicator}>
                          <div style={styles.activeDot}></div>
                          <div style={styles.activePulse}></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* ===== SECTION TENDANCES PRINCIPALE ===== */}
            <section style={styles.trendsMainSection}>
              
              {/* Header des tendances */}
              <div style={styles.trendsHeader}>
                <div style={styles.trendsHeaderLeft}>
                  <div style={styles.trendsIconContainer}>
                    <Crown size={32} style={{...styles.trendsIcon, color: '#fbbf24'}} />
                    <div style={{...styles.trendsIconPulse, borderColor: '#fbbf24'}}></div>
                  </div>
                  <div>
                    <h2 style={styles.trendsTitle}>
                      Tendances - <span style={styles.titleGradient}>{currentNetwork.name}</span>
                    </h2>
                    <p style={styles.trendsSubtitle}>
                      {currentNetwork.trends.length} tendances actives • {currentNetwork.users} utilisateurs • {currentNetwork.engagement} engagement
                    </p>
                    {currentNetwork.topCountry && (
                      <p style={styles.trendsMetadata}>
                        🌍 Pays principal: {currentNetwork.topCountry} • ⏱️ Temps moyen: {currentNetwork.avgWatchTime}
                      </p>
                    )}
                  </div>
                </div>
                
                <div style={styles.trendsHeaderRight}>
                  <div style={{
                    ...styles.networkBadge,
                    backgroundColor: `${currentNetwork.color}25`,
                    borderColor: currentNetwork.color,
                    color: currentNetwork.color,
                  }}>
                    <currentNetwork.icon size={20} />
                    <span>Live {currentNetwork.growth}</span>
                  </div>
                </div>
              </div>

              {/* Section filtres */}
              <div style={styles.filterSection}>
                <div style={styles.filterHeader}>
                  <Filter size={20} style={styles.filterIcon} />
                  <h3 style={styles.filterTitle}>Filtrer par catégorie</h3>
                  <div style={styles.filterCounter}>
                    {filteredTrends.length} résultat{filteredTrends.length > 1 ? 's' : ''}
                  </div>
                </div>
                
                <div style={styles.filterButtons}>
                  {Object.entries(TREND_TYPES).map(([type, config]) => {
                    const isActive = selectedFilter === type;
                    const Icon = config.icon;
                    const count = type === 'all' ? currentNetwork.trends.length : 
                      currentNetwork.trends.filter(trend => trend.type === type).length;
                    
                    return (
                      <button
                        key={type}
                        style={{
                          ...styles.filterButton,
                          ...(isActive ? {
                            background: config.bg,
                            borderColor: config.color,
                            color: config.color,
                            transform: 'translateY(-3px) scale(1.05)',
                            boxShadow: `0 10px 25px ${config.color}50`,
                          } : {})
                        }}
                        onClick={() => handleFilterChange(type)}
                      >
                        <Icon size={18} />
                        <span>{config.label}</span>
                        <span style={{
                          ...styles.filterCount,
                          backgroundColor: isActive ? config.color : 'rgba(255, 255, 255, 0.2)',
                          color: isActive ? 'white' : 'inherit'
                        }}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Container des tendances */}
              <div style={styles.trendsContainer}>
                {filteredTrends.length > 0 ? (
                  <div style={styles.trendsGrid}>
                    {filteredTrends.map((trend, index) => {
                      const angle = index * 45 + waveAnimation * 0.3;
                      const trendConfig = TREND_TYPES[trend.type];
                      
                      return (
                        <TrendCard
                          key={`${trend.rank}-${trend.type}-${trend.title}`}
                          trend={trend}
                          trendConfig={trendConfig}
                          animationOffset={angle}
                          waveAnimation={waveAnimation}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <NoResultsMessage selectedFilter={selectedFilter} />
                )}
              </div>

            </section>
          </div>
        </div>
      </main>

      {/* Styles CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }

        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes holographicScan {
          0% { transform: translateX(-100%) skewX(-10deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-10deg); opacity: 0; }
        }

        @keyframes iconPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }

        @keyframes chartPulse {
          0%, 100% { opacity: 0.8; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }

        @keyframes scanLineMove {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
      `}</style>
    </div>
  );
}

// ===== COMPOSANTS MODULAIRES (sans TypeScript) =====

// Composant pour une carte de tendance individuelle
const TrendCard = React.memo(function TrendCard({ trend, trendConfig, animationOffset, waveAnimation }) {
  return (
    <div
      style={{
        ...styles.trendCard,
        borderLeftColor: trendConfig.color,
        transform: `translateY(${Math.sin(animationOffset * 0.02) * 4}px)`,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
        e.currentTarget.style.boxShadow = `0 25px 50px ${trendConfig.color}60`;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = `translateY(${Math.sin(animationOffset * 0.02) * 4}px) scale(1)`;
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.25)';
      }}
    >
      {/* Effet holographique */}
      <div style={styles.trendHologram}></div>

      <div style={styles.trendContent}>
        {/* Section rang et médaille */}
        <div style={styles.rankSection}>
          <div style={{
            ...styles.rankBadge,
            background: trend.rank <= 3 
              ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
              : trend.rank <= 5
              ? 'linear-gradient(135deg, #e5e7eb, #9ca3af)'
              : 'linear-gradient(135deg, #6b7280, #4b5563)',
          }}>
            {trend.rank <= 3 ? (
              <Award size={22} style={{color: 'white'}} />
            ) : (
              <span style={{color: 'white', fontWeight: '800', fontSize: '16px'}}>{trend.rank}</span>
            )}
          </div>
          {trend.rank <= 3 && (
            <div style={styles.medalText}>#{trend.rank}</div>
          )}
        </div>

        {/* Informations principales */}
        <div style={styles.trendInfo}>
          <div style={styles.trendHeader}>
            <h3 style={styles.trendTitle}>{trend.title}</h3>
            {trend.hot && (
              <div style={styles.hotBadge}>
                <Flame size={14} />
                <span>VIRAL</span>
              </div>
            )}
          </div>

          {/* Créateur */}
          <div style={styles.creatorInfo}>
            <Users size={14} />
            <span>{trend.creator}</span>
          </div>

          {/* Métadonnées enrichies */}
          {trend.country && (
            <div style={styles.metadataRow}>
              <MapPin size={12} />
              <span>{trend.country}</span>
              {trend.ageGroup && (
                <>
                  <div style={styles.metadataDivider}></div>
                  <span>{trend.ageGroup} ans</span>
                </>
              )}
            </div>
          )}

          {trend.hashtags && (
            <div style={styles.hashtagsContainer}>
              {trend.hashtags.slice(0, 2).map((hashtag, i) => (
                <span key={i} style={styles.hashtag}>
                  <Hash size={10} />
                  {hashtag.replace('#', '')}
                </span>
              ))}
            </div>
          )}

          <div style={styles.trendMeta}>
            <div style={{
              ...styles.trendType,
              backgroundColor: trendConfig.bg,
              color: trendConfig.color,
              borderColor: trendConfig.color,
            }}>
              <trend.icon size={16} />
              <span>{trendConfig.label}</span>
            </div>
            
            <div style={styles.trendMetrics}>
              <div style={styles.metricItem}>
                <Eye size={14} />
                <span>{trend.views}</span>
              </div>
              
              <div style={styles.metricItem}>
                <TrendingUp size={14} style={{color: '#10b981'}} />
                <span style={{color: '#10b981'}}>{trend.growth}</span>
              </div>

              {trend.duration && (
                <div style={styles.metricItem}>
                  <Clock size={14} />
                  <span>{trend.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Graphique miniature */}
        <div style={styles.futuristicChart}>
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              style={{
                width: '4px',
                height: `${12 + Math.sin(waveAnimation * 0.1 + i * 0.5) * 8}px`,
                background: `linear-gradient(180deg, ${trendConfig.color}, ${trendConfig.color}60)`,
                borderRadius: '2px',
                boxShadow: `0 0 6px ${trendConfig.color}80`,
                animation: 'chartPulse 2s ease-in-out infinite',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Ligne de scan */}
      <div style={{
        ...styles.scanLine,
        background: `linear-gradient(90deg, transparent, ${trendConfig.color}80, transparent)`,
        transform: `translateY(${Math.sin(waveAnimation * 0.08) * 150}%)`,
      }}></div>
    </div>
  );
});

// Composant pour le message "Aucun résultat"
const NoResultsMessage = React.memo(function NoResultsMessage({ selectedFilter }) {
  const filterConfig = TREND_TYPES[selectedFilter];
  
  return (
    <div style={styles.noResults}>
      <div style={styles.noResultsIcon}>
        <filterConfig.icon size={64} style={{color: filterConfig.color, opacity: 0.6}} />
      </div>
      <h3 style={styles.noResultsTitle}>
        Aucune tendance {filterConfig.label.toLowerCase()} trouvée
      </h3>
      <p style={styles.noResultsText}>
        Essayez de sélectionner un autre type de contenu ou un autre réseau social 
        pour découvrir plus de tendances.
      </p>
    </div>
  );
});

// ===== STYLES (objets JavaScript normaux) =====
const styles = {
  // Container global
  pageContainer: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #8b5cf6 50%, #667eea 75%, #764ba2 100%)',
    backgroundSize: '400% 400%',
    minHeight: '100vh',
    color: '#f8f9fa',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    position: 'relative',
    overflow: 'hidden',
    animation: 'borderFlow 15s ease infinite',
  },

  // Écran de chargement
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  },

  loadingSpinner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },

  // Effets d'arrière-plan
  particleBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 1,
  },

  particle: {
    position: 'absolute',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2), transparent)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite',
    filter: 'blur(0.5px)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  },

  matrixBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    opacity: 0.08,
    pointerEvents: 'none',
    zIndex: 2,
  },

  matrixColumn: {
    position: 'absolute',
    color: '#ffffff',
    fontSize: '12px',
    fontFamily: 'monospace',
    animation: 'matrixRain linear infinite',
    textShadow: '0 0 8px #ffffff',
  },

  matrixChar: {
    display: 'block',
    lineHeight: '16px',
    opacity: Math.random() * 0.8 + 0.2,
  },

  floatingElements: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 3,
  },

  floatingElement: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(248, 249, 250, 0.05))',
    filter: 'blur(2px)',
    animation: 'float 10s ease-in-out infinite',
  },

  floatingElement1: {
    width: '250px',
    height: '250px',
    top: '8%',
    right: '5%',
    animationDelay: '0s',
  },

  floatingElement2: {
    width: '180px',
    height: '180px',
    bottom: '15%',
    left: '3%',
    animationDelay: '4s',
  },

  floatingElement3: {
    width: '120px',
    height: '120px',
    top: '55%',
    right: '25%',
    animationDelay: '8s',
  },

  floatingElement4: {
    width: '90px',
    height: '90px',
    top: '25%',
    left: '70%',
    animationDelay: '12s',
  },

  // Header hero
  heroHeader: {
    padding: '100px 0 60px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },

  container: {
    maxWidth: '1800px',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
  },

  badgeContainer: {
    marginTop: '50px',
    marginBottom: '40px',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 32px',
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(25px)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#f8f9fa',
    boxShadow: '0 10px 40px rgba(31, 38, 135, 0.4)',
  },

  badgeIcon: {
    color: '#f59e0b',
    filter: 'drop-shadow(0 0 5px #f59e0b)',
  },

  badgeDivider: {
    width: '1px',
    height: '16px',
    background: 'rgba(255, 255, 255, 0.3)',
  },

  title: {
    fontSize: '4.5rem',
    fontWeight: '900',
    lineHeight: '1.1',
    marginBottom: '32px',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    letterSpacing: '-0.025em',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
  },

  titleHighlight: {
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 30%, #ffffff 60%, #f8f9fa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 200%',
    animation: 'borderFlow 8s ease infinite',
  },

  description: {
    fontSize: '1.35rem',
    lineHeight: '1.8',
    color: '#f1f3f4',
    marginBottom: '48px',
    maxWidth: '800px',
    margin: '0 auto 48px',
    fontWeight: '400',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },

  // Statistiques globales
  globalStats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '48px',
    flexWrap: 'wrap',
    marginBottom: '32px',
  },

  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px 32px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },

  statIcon: {
    color: '#fbbf24',
    filter: 'drop-shadow(0 0 8px #fbbf24)',
  },

  statNumber: {
    fontSize: '24px',
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: '1',
  },

  statLabel: {
    fontSize: '14px',
    color: '#e9ecef',
    fontWeight: '500',
  },

  // Contenu principal
  mainContent: {
    position: 'relative',
    zIndex: 10,
    paddingBottom: '100px',
  },

  mainLayout: {
    display: 'flex',
    gap: '48px',
    alignItems: 'flex-start',
  },

  // Sidebar réseaux
  networkSidebar: {
    width: '380px',
    flexShrink: 0,
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(30px)',
    border: '2px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '28px',
    padding: '32px',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.25)',
  },

  sidebarHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
    paddingBottom: '20px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
  },

  sidebarIconContainer: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
  },

  sidebarIcon: {
    color: 'white',
  },

  sidebarTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#ffffff',
    margin: 0,
  },

  sidebarSubtitle: {
    fontSize: '14px',
    color: '#e9ecef',
    margin: '4px 0 0 0',
    fontWeight: '500',
  },

  networkList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  networkItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '2px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  networkItemIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.3s ease',
  },

  networkItemInfo: {
    flex: 1,
  },

  networkItemName: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#ffffff',
    margin: '0 0 8px 0',
  },

  networkItemStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  networkStatRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#e9ecef',
  },

  networkItemGrowth: {
    color: '#10b981',
    fontWeight: '700',
  },

  activeIndicator: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  activeDot: {
    width: '10px',
    height: '10px',
    background: '#10b981',
    borderRadius: '50%',
    animation: 'iconPulse 2s ease-in-out infinite',
    boxShadow: '0 0 15px #10b981',
  },

  activePulse: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    border: '2px solid #10b981',
    borderRadius: '50%',
    animation: 'iconPulse 2s ease-in-out infinite',
    left: '-5px',
    top: '-5px',
  },

  // Section tendances
  trendsMainSection: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(30px)',
    border: '2px solid rgba(255, 255, 255, 0.25)',
    borderRadius: '28px',
    padding: '40px',
    boxShadow: '0 15px 50px rgba(0, 0, 0, 0.25)',
  },

  trendsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '40px',
    flexWrap: 'wrap',
    gap: '20px',
  },

  trendsHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },

  trendsIconContainer: {
    position: 'relative',
    width: '70px',
    height: '70px',
    background: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)',
  },

  trendsIcon: {
    filter: 'drop-shadow(0 0 12px #fbbf24)',
  },

  trendsIconPulse: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '3px solid',
    borderRadius: '20px',
    animation: 'iconPulse 2.5s ease-in-out infinite',
  },

  trendsTitle: {
    fontSize: '2.2rem',
    fontWeight: '900',
    color: '#ffffff',
    margin: 0,
    textShadow: '0 3px 15px rgba(0, 0, 0, 0.4)',
  },

  titleGradient: {
    background: 'linear-gradient(90deg, #f8f9fa, #e9ecef, #ffffff, #f8f9fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '200% 100%',
    animation: 'borderFlow 6s ease infinite',
  },

  trendsSubtitle: {
    fontSize: '15px',
    color: '#e9ecef',
    margin: '6px 0 0 0',
    fontWeight: '600',
  },

  trendsMetadata: {
    fontSize: '13px',
    color: '#d1d5db',
    margin: '4px 0 0 0',
    fontWeight: '500',
  },

  trendsHeaderRight: {
    display: 'flex',
    alignItems: 'center',
  },

  networkBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 20px',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: '700',
    border: '2px solid',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
  },

  // Section filtres
  filterSection: {
    marginBottom: '40px',
    padding: '32px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    border: '2px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },

  filterHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },

  filterIcon: {
    color: '#667eea',
    filter: 'drop-shadow(0 0 5px #667eea)',
  },

  filterTitle: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#ffffff',
    margin: 0,
    flex: 1,
  },

  filterCounter: {
    padding: '6px 16px',
    background: 'rgba(102, 126, 234, 0.2)',
    color: '#667eea',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '700',
    border: '1px solid rgba(102, 126, 234, 0.3)',
  },

  filterButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },

  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 24px',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '2px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    color: '#e9ecef',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },

  filterCount: {
    padding: '4px 10px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '800',
    marginLeft: '6px',
    transition: 'all 0.3s ease',
  },

  // Container des tendances
  trendsContainer: {
    position: 'relative',
  },

  trendsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
    gap: '32px',
    marginBottom: '40px',
  },

  // Cartes de tendances
  trendCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '32px',
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(25px)',
    borderRadius: '24px',
    borderLeft: '5px solid',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
    overflow: 'hidden',
    cursor: 'pointer',
    height: 'fit-content',
  },

  trendHologram: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.08), transparent)',
    borderRadius: '24px',
    animation: 'holographicScan 6s ease-in-out infinite',
  },

  trendContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },

  rankSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    justifyContent: 'center',
  },

  rankBadge: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '800',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
    border: '3px solid rgba(255, 255, 255, 0.2)',
  },

  medalText: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#fbbf24',
    textShadow: '0 0 8px #fbbf24',
  },

  trendInfo: {
    flex: 1,
    textAlign: 'center',
  },

  trendHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },

  trendTitle: {
    fontSize: '19px',
    fontWeight: '800',
    color: '#ffffff',
    margin: 0,
    textAlign: 'center',
    lineHeight: '1.4',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
  },

  hotBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    background: 'rgba(239, 68, 68, 0.25)',
    color: '#ef4444',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '700',
    border: '2px solid rgba(239, 68, 68, 0.4)',
    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)',
    animation: 'glowPulse 2s ease-in-out infinite',
  },

  creatorInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#e9ecef',
    marginBottom: '12px',
    fontWeight: '600',
  },

  metadataRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '13px',
    color: '#d1d5db',
    marginBottom: '12px',
    fontWeight: '500',
  },

  metadataDivider: {
    width: '4px',
    height: '4px',
    background: '#d1d5db',
    borderRadius: '50%',
  },

  hashtagsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '16px',
  },

  hashtag: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 10px',
    background: 'rgba(102, 126, 234, 0.2)',
    color: '#667eea',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '600',
    border: '1px solid rgba(102, 126, 234, 0.3)',
  },

  trendMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
  },

  trendType: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '700',
    border: '2px solid currentColor',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },

  trendMetrics: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },

  metricItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#e9ecef',
    fontWeight: '600',
  },

  futuristicChart: {
    display: 'flex',
    alignItems: 'end',
    gap: '4px',
    height: '35px',
    justifyContent: 'center',
    paddingTop: '8px',
  },

  scanLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '3px',
    animation: 'scanLineMove 4s ease-in-out infinite',
    top: '50%',
    borderRadius: '2px',
  },

  // Message aucun résultat
  noResults: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 40px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '24px',
    border: '2px dashed rgba(255, 255, 255, 0.2)',
  },

  noResultsIcon: {
    marginBottom: '24px',
    opacity: 0.6,
    animation: 'float 4s ease-in-out infinite',
  },

  noResultsTitle: {
    fontSize: '28px',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '16px',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },

  noResultsText: {
    fontSize: '16px',
    color: '#e9ecef',
    maxWidth: '500px',
    lineHeight: '1.6',
    fontWeight: '500',
  },
};