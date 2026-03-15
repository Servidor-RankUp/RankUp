import { createClient } from '@supabase/supabase-js'

// URL do Supabase (o pooler que você passou)
const supabaseUrl = 'https://aws-1-sa-east-1.pooler.supabase.com'

// Chave do banco (não use admin em produção!)
const supabaseKey = 'postgres.exjwzyhdevtdlmnjsrxs:Rankup1234567891011'

// Cria cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)
