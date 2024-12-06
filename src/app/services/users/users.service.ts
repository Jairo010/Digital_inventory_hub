import { Injectable } from '@angular/core';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private supabaseService: SupabaseService) {}

  async getUsers(userId: string | null = null): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('get_users', { user_id: userId });

    if (error) {
      console.error('Error fetching users:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async createUser(email: string, name: string, lastname: string, nickname: string, image: string, rol: string): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('insert_user', {
        p_email: email,
        p_name: name,
        p_lastname: lastname,
        p_nickname: nickname,
        p_image: image,
        p_rol: rol,
      });

    if (error) {
      console.error('Error creating user:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async updateUser(
    id: string,
    email: string | null = null,
    name: string | null = null,
    lastname: string | null = null,
    nickname: string | null = null,
    image: string | null = null,
    rol: string | null = null
  ): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('update_user', {
        p_id: id,
        p_email: email,
        p_name: name,
        p_lastname: lastname,
        p_nickname: nickname,
        p_image: image,
        p_rol: rol,
      });

    if (error) {
      console.error('Error updating user:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async deleteUser(id: string): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .rpc('delete_user', { p_id: id });

    if (error) {
      console.error('Error deleting user:', error);
      throw new Error(error.message);
    }
    return data;
  }
}
