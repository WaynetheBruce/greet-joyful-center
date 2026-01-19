-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  project_type TEXT,
  synopsis TEXT,
  description TEXT,
  location TEXT,
  status TEXT DEFAULT 'pending',
  featured_on_homepage BOOLEAN DEFAULT false,
  show_on_captacao BOOLEAN DEFAULT false,
  show_on_portfolio BOOLEAN DEFAULT false,
  is_hidden BOOLEAN DEFAULT false,
  has_incentive_law BOOLEAN DEFAULT false,
  incentive_law_details TEXT,
  stage TEXT,
  stages TEXT[],
  categorias_tags TEXT[],
  awards TEXT[],
  diferenciais TEXT,
  impacto_cultural TEXT,
  impacto_social TEXT,
  publico_alvo TEXT,
  responsavel_nome TEXT,
  responsavel_email TEXT,
  responsavel_telefone TEXT,
  link_video TEXT,
  news JSONB,
  festivals_exhibitions JSONB,
  image_url TEXT,
  hero_image_url TEXT,
  card_image_url TEXT,
  presentation_document_url TEXT,
  order_index INTEGER DEFAULT 0,
  user_id UUID,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create project_members table
CREATE TABLE public.project_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  funcao TEXT,
  detalhes TEXT,
  photo_url TEXT,
  social_links JSONB,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create contrapartidas table
CREATE TABLE public.contrapartidas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  valor TEXT,
  indice TEXT,
  ordem INTEGER DEFAULT 0,
  ativo BOOLEAN DEFAULT true,
  beneficios TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create settings table
CREATE TABLE public.settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  role TEXT NOT NULL DEFAULT 'user'
);

-- Enable RLS on all tables
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contrapartidas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Public read policies for public-facing content
CREATE POLICY "Projects are publicly readable" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Project members are publicly readable" ON public.project_members FOR SELECT USING (true);
CREATE POLICY "Contrapartidas are publicly readable" ON public.contrapartidas FOR SELECT USING (true);
CREATE POLICY "Settings are publicly readable" ON public.settings FOR SELECT USING (true);
CREATE POLICY "Profiles are publicly readable" ON public.profiles FOR SELECT USING (true);

-- Admin write policies (check user_roles for admin)
CREATE POLICY "Admins can manage projects" ON public.projects FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage project_members" ON public.project_members FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage contrapartidas" ON public.contrapartidas FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage settings" ON public.settings FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Admins can manage user_roles" ON public.user_roles FOR ALL USING (
  EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'admin')
);
CREATE POLICY "Users can read their own role" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_show_on_captacao ON public.projects(show_on_captacao);
CREATE INDEX idx_projects_show_on_portfolio ON public.projects(show_on_portfolio);
CREATE INDEX idx_project_members_project_id ON public.project_members(project_id);
CREATE INDEX idx_contrapartidas_project_id ON public.contrapartidas(project_id);
CREATE INDEX idx_settings_key ON public.settings(key);
CREATE INDEX idx_user_roles_user_id ON public.user_roles(user_id);