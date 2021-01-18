package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

import static java.util.Collections.singletonList;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
    //Lớp này ghi đè phương thức loadUserByUsername () được Spring Security sử dụng để tìm nạp chi tiết người dùng. Bên trong phương thức, chúng tôi đang truy vấn UserRepository và tìm nạp các chi tiết đó và gói chúng trong một đối tượng Người dùng khác triển khai giao diện UserDetails .

    private final UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) { //Tải người dùng bằng tên người dùng
        Optional<User> userOptional = userRepository.findByUsername(username); //Lấy tên người dùng đầu vào và trả về chi tiết người dùng
        User user = userOptional
                .orElseThrow(() -> new UsernameNotFoundException("No user " +
                        "Found with username : " + username)); // Nếu không có người dùng ném ngoại lệ nếu có trả về user

        return new org.springframework.security //Tạo một đối tượng khác như trình bao bọc với người dùng cùng tên
                .core.userdetails.User(user.getUsername(), user.getPassword(),
                user.isEnabled(), true, true, //tài khoản không hết hạn/ thông tin đăng nhập không hết hạn/ Tài khoản không bị khóa
                true, getAuthorities("USER")); //Đặt quyền tài khoản người dùng
    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        return singletonList(new SimpleGrantedAuthority(role)); //đặt quyền truy cập
    }
}
