import type User from '@/models/Users';
import http from '@/services/http';

export async function getUserList() {
  return await http.get<User[]>('/api/users');
}
