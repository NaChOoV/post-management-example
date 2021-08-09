import { Param } from '@nestjs/common';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { DeletePostParam } from './dto/delete-post.param';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  getAllPost() {
    return this.postService.getAllPost();
  }
  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }
  @Delete(':id')
  deletePost(@Param() params: DeletePostParam) {
    return this.postService.deletePostById(params.id);
  }
}
