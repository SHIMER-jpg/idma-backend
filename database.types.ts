export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      lists: {
        Row: {
          created_at: string
          id: number
          name: string | null
          status: string | null
          worker_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          status?: string | null
          worker_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          status?: string | null
          worker_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_worker_id_fkey"
            columns: ["worker_id"]
            referencedRelation: "workers"
            referencedColumns: ["id"]
          }
        ]
      }
      order_items: {
        Row: {
          id: number
          list_id: number | null
          note: string | null
          order_id: number
          product_id: number
          quantity: number
          variant_values: string[]
        }
        Insert: {
          id?: number
          list_id?: number | null
          note?: string | null
          order_id: number
          product_id: number
          quantity: number
          variant_values: string[]
        }
        Update: {
          id?: number
          list_id?: number | null
          note?: string | null
          order_id?: number
          product_id?: number
          quantity?: number
          variant_values?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "order_items_list_id_fkey"
            columns: ["list_id"]
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          cancelled_at: string | null
          contact_name: string
          created_at: string
          id: number
          internal_note: string | null
          number: number
          owner_note: string | null
          payment_status: string | null
          status: string
        }
        Insert: {
          cancelled_at?: string | null
          contact_name: string
          created_at?: string
          id?: number
          internal_note?: string | null
          number: number
          owner_note?: string | null
          payment_status?: string | null
          status: string
        }
        Update: {
          cancelled_at?: string | null
          contact_name?: string
          created_at?: string
          id?: number
          internal_note?: string | null
          number?: number
          owner_note?: string | null
          payment_status?: string | null
          status?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          cost: number | null
          created_at: string
          id: number
          img: string | null
          name: string
          price: number
          published: boolean
          worker_id: number | null
        }
        Insert: {
          cost?: number | null
          created_at?: string
          id?: number
          img?: string | null
          name: string
          price?: number
          published?: boolean
          worker_id?: number | null
        }
        Update: {
          cost?: number | null
          created_at?: string
          id?: number
          img?: string | null
          name?: string
          price?: number
          published?: boolean
          worker_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_worker_id_fkey"
            columns: ["worker_id"]
            referencedRelation: "workers"
            referencedColumns: ["id"]
          }
        ]
      }
      workers: {
        Row: {
          created_at: string
          fee: number | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          fee?: number | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          fee?: number | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
