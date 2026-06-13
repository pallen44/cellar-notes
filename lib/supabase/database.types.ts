export type Database = {
  public: {
    Tables: {
      wine_entries: {
        Row: {
          id: string;
          winery: string;
          wine_name: string;
          vintage: number | null;
          grape: string | null;
          region: string;
          country: string | null;
          price: number;
          location: string | null;
          people: string | null;
          food_pairing: string | null;
          occasion: string | null;
          notes: string | null;
          rating: number;
          photo_path: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          winery: string;
          wine_name: string;
          vintage?: number | null;
          grape?: string | null;
          region: string;
          country?: string | null;
          price: number;
          location?: string | null;
          people?: string | null;
          food_pairing?: string | null;
          occasion?: string | null;
          notes?: string | null;
          rating: number;
          photo_path?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          winery?: string;
          wine_name?: string;
          vintage?: number | null;
          grape?: string | null;
          region?: string;
          country?: string | null;
          price?: number;
          location?: string | null;
          people?: string | null;
          food_pairing?: string | null;
          occasion?: string | null;
          notes?: string | null;
          rating?: number;
          photo_path?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
