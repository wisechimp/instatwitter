yarn run v1.22.18
$ "D:\Stuart Documents\Programming\react\instatwitter\node_modules\.bin\supabase" gen types typescript --project-id xfbtcirtvdbopckxkect
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
      approves: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          twitt_id: string
        }
        Insert: {
          created_at?: string
          id: string
          profile_id: string
          twitt_id: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          twitt_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "approves_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approves_twitt_id_fkey"
            columns: ["twitt_id"]
            referencedRelation: "twitts"
            referencedColumns: ["id"]
          }
        ]
      }
      bookmarks: {
        Row: {
          created_at: string
          id: string
          profile_id: string | null
          twitt_id: string | null
        }
        Insert: {
          created_at?: string
          id: string
          profile_id?: string | null
          twitt_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string | null
          twitt_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookmarks_twitt_id_fkey"
            columns: ["twitt_id"]
            referencedRelation: "twitts"
            referencedColumns: ["id"]
          }
        ]
      }
      hashtags: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          updated_at: string
          username: string | null
        }
        Insert: {
          id: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          id?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      replies: {
        Row: {
          id: string
          profile_id: string
          reply_id: string | null
          text: string
          twitt_id: string | null
        }
        Insert: {
          id: string
          profile_id: string
          reply_id?: string | null
          text: string
          twitt_id?: string | null
        }
        Update: {
          id?: string
          profile_id?: string
          reply_id?: string | null
          text?: string
          twitt_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "replies_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_reply_id_fkey"
            columns: ["reply_id"]
            referencedRelation: "replies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "replies_twitt_id_fkey"
            columns: ["twitt_id"]
            referencedRelation: "twitts"
            referencedColumns: ["id"]
          }
        ]
      }
      twitt_hashtag: {
        Row: {
          hashtag_id: string
          twitt_id: string
        }
        Insert: {
          hashtag_id: string
          twitt_id: string
        }
        Update: {
          hashtag_id?: string
          twitt_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "twitt_hashtag_hashtag_id_fkey"
            columns: ["hashtag_id"]
            referencedRelation: "hashtags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "twitt_hashtag_twitt_id_fkey"
            columns: ["twitt_id"]
            referencedRelation: "twitts"
            referencedColumns: ["id"]
          }
        ]
      }
      twitts: {
        Row: {
          created_at: string
          id: string
          profile_id: string
          text: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          profile_id: string
          text: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string
          text?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "twitts_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
Done in 1.65s.
