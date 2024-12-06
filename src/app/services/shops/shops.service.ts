import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  constructor(private supabaseService: SupabaseService) {}

  async getBusiness(businessId: string | null = null): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('get_business', { business_id: businessId });

    if (error) {
      console.error('Error fetching business:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async createBusiness(owner: string, name: string, businessImage: string): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('insert_business', {
        p_owner: owner,
        p_name: name,
        p_business_image: businessImage,
      });

    if (error) {
      console.error('Error creating business:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async updateBusiness(
    id: string,
    owner: string | null = null,
    name: string | null = null,
    businessImage: string | null = null
  ): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('update_business', {
        p_id: id,
        p_owner: owner,
        p_name: name,
        p_business_image: businessImage,
      });

    if (error) {
      console.error('Error updating business:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async deleteBusiness(id: string): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('delete_business', { p_id: id });

    if (error) {
      console.error('Error deleting business:', error);
      throw new Error(error.message);
    }
    return data;
  }
}
