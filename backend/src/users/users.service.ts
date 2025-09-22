import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  createUser(email: string, password: string) {
    const user = this.userRepository.create({ email, password });
    return this.userRepository.save(user);
  }
}
