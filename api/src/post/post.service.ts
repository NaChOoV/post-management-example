import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {}

  async getAllPost(): Promise<Post[]> {
    return await this.postRepository.getAllPost();
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    return await this.postRepository.createPost(createPostDto);
  }

  async deletePostById(postId: string): Promise<Post> {
    const deletedPost = await this.postRepository.deletePostById(postId);
    if (!deletedPost) {
      throw new NotFoundException();
    }
    return deletedPost;
  }
}
